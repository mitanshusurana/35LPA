import { Component, inject, computed, signal, effect, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DAILY_SCHEDULE, TimeBlock, BlockStatus } from '../../core/models/schedule.model';
import { SprintStore } from '../../core/store/sprint.store';
import { CurriculumService } from '../../core/services/curriculum.service';
import { Task } from '../../core/models/curriculum.model';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col h-full bg-dracula-bg text-dracula-foreground p-4 pb-20">
      <header class="mb-6 border-b border-dracula-current/50 pb-4">
        <h1 class="text-xl font-bold font-mono text-dracula-purple">DAY {{ currentDay() }} SCHEDULE</h1>
        <div class="text-xs text-dracula-comment font-mono mt-1">
          STRICT TIME BLOCKING • NO EXCEPTIONS
        </div>
      </header>

      <div class="flex-1 overflow-y-auto space-y-4">
        <!-- Current Time Indicator -->
        <div class="flex justify-between items-center text-xs font-mono text-dracula-cyan mb-2 sticky top-0 bg-dracula-bg z-10 py-2 border-b border-dracula-current">
          <span>NOW: {{ currentTime() }}</span>
          <span>{{ currentBlock()?.title || 'FREE TIME' }}</span>
        </div>

        @for (block of schedule; track block.id) {
          <div
            class="relative p-4 rounded-lg border transition-all duration-300"
            [ngClass]="getBlockClasses(block)"
          >
            <!-- Time Column -->
            <div class="absolute left-0 top-0 bottom-0 w-16 flex flex-col items-center justify-center border-r border-dracula-current/30 bg-black/20 rounded-l-lg">
              <span class="text-xs font-mono font-bold">{{ block.startTime }}</span>
              <span class="text-[10px] text-dracula-comment">{{ block.endTime }}</span>
            </div>

            <!-- Content -->
            <div class="pl-20">
              <div class="flex justify-between items-start">
                <h3 class="font-bold text-sm uppercase tracking-wide">{{ block.title }}</h3>
                <span class="text-[10px] px-2 py-0.5 rounded font-mono uppercase" [ngClass]="getStatusBadgeClasses(getBlockStatus(block))">
                  {{ getBlockStatus(block) }}
                </span>
              </div>

              <p class="text-xs text-dracula-comment mt-1 leading-relaxed">
                {{ block.description }}
              </p>

              <!-- Tasks for this Block -->
              @if (getTasksForBlock(block).length > 0) {
                <div class="mt-4 pt-4 border-t border-dracula-current/30">
                  <h4 class="text-[10px] font-bold text-dracula-cyan uppercase mb-2">Assigned Tasks</h4>
                  <ul class="space-y-2">
                    @for (task of getTasksForBlock(block); track task.id) {
                      <li class="flex items-start gap-2 bg-dracula-current/20 p-2 rounded hover:bg-dracula-current/40 transition-colors">
                        <input
                          type="checkbox"
                          [checked]="isTaskCompleted(task.id)"
                          (change)="toggleTask(task, $event)"
                          class="mt-0.5 accent-dracula-purple h-3 w-3"
                        />
                        <div class="flex-1">
                          <a [href]="task.sourceUrl" target="_blank" class="text-xs font-semibold hover:text-dracula-cyan underline decoration-dracula-cyan/30 underline-offset-2 block">
                            {{ task.title }}
                          </a>
                          <span class="text-[9px] text-dracula-comment uppercase tracking-wider block mt-0.5">{{ task.category }}</span>
                        </div>
                      </li>
                    }
                  </ul>
                </div>
              }

              <!-- Actions for Active Block -->
              @if (isBlockActive(block)) {
                <div class="mt-3 flex gap-2">
                   @if (getBlockStatus(block) !== 'completed' && getBlockStatus(block) !== 'failed') {
                      <button
                        (click)="markComplete(block)"
                        class="flex-1 bg-dracula-green text-dracula-bg text-xs font-bold py-2 rounded hover:bg-opacity-90 transition-colors"
                      >
                        COMPLETE BLOCK
                      </button>
                      <button
                        (click)="markFailed(block)"
                        class="flex-1 bg-dracula-red text-dracula-foreground text-xs font-bold py-2 rounded hover:bg-opacity-90 transition-colors"
                      >
                        FAIL BLOCK
                      </button>
                   }
                </div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnDestroy {
  readonly store = inject(SprintStore);
  private curriculumService = inject(CurriculumService);
  readonly schedule = DAILY_SCHEDULE;

  currentTime = signal(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));

  private timeSubscription: Subscription;

  constructor() {
    this.timeSubscription = interval(1000 * 60).subscribe(() => {
      this.currentTime.set(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
    });
  }

  ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }

  // Computed property for Current Day
  currentDay = this.store.currentDay;

  // Helper to parse "HH:mm" to minutes
  private getMinutes(timeStr: string): number {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  }

  currentBlock = computed(() => {
    const now = this.getMinutes(this.currentTime());
    return this.schedule.find(b => {
      const start = this.getMinutes(b.startTime);
      const end = this.getMinutes(b.endTime);
      return now >= start && now < end;
    });
  });

  getTasksForBlock(block: TimeBlock): Task[] {
    return this.curriculumService.getTasksForBlock(block.type, this.currentDay());
  }

  isTaskCompleted(taskId: string): boolean {
    return !!this.store.todayMetrics().taskStatus?.[taskId];
  }

  toggleTask(task: Task, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.store.updateTaskStatus(task.id, checked, task.xp);
  }

  isBlockActive(block: TimeBlock): boolean {
    const now = this.getMinutes(this.currentTime());
    const start = this.getMinutes(block.startTime);
    const end = this.getMinutes(block.endTime);
    return now >= start && now < end;
  }

  getBlockStatus(block: TimeBlock): BlockStatus {
    const storedStatus = this.store.todayMetrics().blockStatus?.[block.id];
    if (storedStatus) return storedStatus as BlockStatus;

    const now = this.getMinutes(this.currentTime());
    const start = this.getMinutes(block.startTime);
    const end = this.getMinutes(block.endTime);

    if (now < start) return 'upcoming';
    if (now >= start && now < end) return 'active';

    return 'failed';
  }

  getBlockClasses(block: TimeBlock): string {
    const status = this.getBlockStatus(block);
    switch (status) {
      case 'active':
        return 'bg-dracula-current border-dracula-purple shadow-lg ring-1 ring-dracula-purple';
      case 'completed':
        return 'bg-dracula-green/10 border-dracula-green/50 opacity-75';
      case 'failed':
        return 'bg-dracula-red/10 border-dracula-red/50 grayscale opacity-60';
      default: // upcoming
        return 'bg-dracula-bg border-dracula-comment/20 opacity-50';
    }
  }

  getStatusBadgeClasses(status: BlockStatus): string {
    switch (status) {
      case 'active': return 'bg-dracula-purple text-dracula-bg animate-pulse';
      case 'completed': return 'bg-dracula-green text-dracula-bg';
      case 'failed': return 'bg-dracula-red text-dracula-foreground';
      default: return 'bg-dracula-comment text-dracula-bg';
    }
  }

  markComplete(block: TimeBlock) {
    this.store.updateBlockStatus(block.id, 'completed');
    const update: any = {};
    if (block.type === 'consume' || block.type === 'deep-tech') update.csTime = (this.store.todayMetrics().csTime || 0) + block.durationMinutes;
    if (block.type === 'execute') update.dsaTime = (this.store.todayMetrics().dsaTime || 0) + block.durationMinutes;
    if (block.type === 'lld') update.lldTime = (this.store.todayMetrics().lldTime || 0) + block.durationMinutes;
    if (block.type === 'portfolio') update.portfolioTime = (this.store.todayMetrics().portfolioTime || 0) + block.durationMinutes;

    if (block.type === 'lld') update.xp = (this.store.todayMetrics().xp || 0) + 50;

    this.store.updateDailyMetric(update);
  }

  markFailed(block: TimeBlock) {
    this.store.updateBlockStatus(block.id, 'failed');
  }
}
