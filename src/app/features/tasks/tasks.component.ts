import { Component, inject, computed, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintStore } from '../../core/store/sprint.store';
import { CURRICULUM, Task } from '../../core/models/curriculum.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col h-full bg-dracula-bg text-dracula-foreground p-4 pb-20">
      <header class="mb-6 border-b border-dracula-current/50 pb-4 sticky top-0 bg-dracula-bg z-10 shadow-lg">
        <h1 class="text-xl font-bold font-mono text-dracula-pink">MASTER CURRICULUM</h1>
        <div class="text-xs text-dracula-comment font-mono mt-1">
          30-DAY EXECUTION PLAN • FRONT-RUN OR CATCH-UP
        </div>

        <!-- Progress Summary -->
        <div class="mt-4 flex gap-8 text-xs font-mono justify-center bg-dracula-current/20 p-2 rounded-lg">
           <div class="flex flex-col items-center">
             <span class="text-dracula-comment text-[10px] tracking-wider uppercase">Completed</span>
             <span class="text-dracula-green font-bold text-lg">{{ completedCount() }}</span>
           </div>
           <div class="flex flex-col items-center">
             <span class="text-dracula-comment text-[10px] tracking-wider uppercase">Total</span>
             <span class="text-dracula-orange font-bold text-lg">{{ totalTasks }}</span>
           </div>
        </div>
      </header>

      <div class="flex-1 overflow-y-auto space-y-6 pb-20">
        @for (dayGroup of curriculum; track dayGroup.day) {
          <div class="rounded-lg border border-dracula-current/30 overflow-hidden bg-dracula-bg/50 backdrop-blur-sm">
            <!-- Day Header -->
            <div class="bg-gradient-to-r from-dracula-current/40 to-transparent p-3 flex justify-between items-center cursor-pointer hover:bg-dracula-current/60 transition-colors border-b border-dracula-current/20"
                 (click)="toggleDay(dayGroup.day)">
              <div class="flex flex-col">
                  <span class="font-bold font-mono text-sm uppercase tracking-wide" [class.text-dracula-cyan]="isDayActive(dayGroup.day)">
                    DAY {{ dayGroup.day }}
                  </span>
                  @if (isDayActive(dayGroup.day)) {
                      <span class="text-[9px] text-dracula-green font-bold animate-pulse">CURRENT SPRINT DAY</span>
                  }
              </div>
              <span class="text-[10px] text-dracula-comment font-mono bg-black/30 px-2 py-1 rounded">
                {{ getCompletedTasksForDay(dayGroup.day) }} / {{ dayGroup.tasks.length }} DONE
              </span>
            </div>

            <!-- Tasks List -->
             @if (isDayExpanded(dayGroup.day)) {
               <div class="p-3 space-y-3">
                  @for (task of dayGroup.tasks; track task.id) {
                    <div class="flex items-start gap-3 p-3 rounded-lg border border-dracula-current/10 bg-dracula-current/5 hover:bg-dracula-current/20 transition-all duration-200 group">
                      <!-- Checkbox -->
                      <div class="pt-1">
                        <input
                          type="checkbox"
                          [checked]="isTaskCompleted(task.id)"
                          (change)="toggleTask(task, $event)"
                          class="accent-dracula-green h-5 w-5 cursor-pointer rounded-sm bg-dracula-current border-dracula-comment"
                        />
                      </div>

                      <!-- Content -->
                      <div class="flex-1 min-w-0">
                        <div class="flex flex-col gap-1">
                           <a [href]="task.sourceUrl" target="_blank" class="text-sm font-bold text-dracula-foreground hover:text-dracula-pink underline decoration-dracula-pink/30 underline-offset-4 truncate pr-2 transition-colors">
                             {{ task.title }}
                           </a>
                           <span class="text-[9px] w-fit px-1.5 py-0.5 rounded font-mono uppercase bg-dracula-current text-dracula-cyan font-bold whitespace-nowrap border border-dracula-cyan/20">
                             {{ task.category }}
                           </span>
                        </div>

                        <div class="flex justify-between items-center mt-2">
                          <span class="text-[10px] text-dracula-comment font-mono">
                            +{{ task.xp }} XP
                          </span>
                          @if (isTaskCompleted(task.id)) {
                            <span class="text-[9px] text-dracula-green font-bold uppercase tracking-widest animate-pulse flex items-center gap-1">
                              DONE
                            </span>
                          }
                        </div>
                      </div>
                    </div>
                  }
               </div>
             }
          </div>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent {
  readonly store = inject(SprintStore);
  readonly curriculum = CURRICULUM;
  readonly totalTasks = CURRICULUM.reduce((acc, day) => acc + day.tasks.length, 0);

  // Using simple set for expansion
  expandedDays = signal<Set<number>>(new Set([1]));

  constructor() {
      // Auto-expand current day
      const current = new Set(this.expandedDays());
      current.add(this.store.currentDay());
      this.expandedDays.set(current);
  }

  isDayActive(day: number): boolean {
    return this.store.currentDay() === day;
  }

  isDayExpanded(day: number): boolean {
      return this.expandedDays().has(day);
  }

  toggleDay(day: number) {
      const current = new Set(this.expandedDays());
      if (current.has(day)) {
          current.delete(day);
      } else {
          current.add(day);
      }
      this.expandedDays.set(current);
  }

  isTaskCompleted(taskId: string): boolean {
    const allMetrics = this.store.metrics();
    return Object.values(allMetrics).some(m => m.taskStatus?.[taskId]);
  }

  completedCount = computed(() => {
     const allMetrics = this.store.metrics();
     const completed = new Set<string>();
     Object.values(allMetrics).forEach(m => {
          if (m.taskStatus) {
              Object.entries(m.taskStatus).forEach(([id, isDone]) => {
                  if (isDone) completed.add(id);
              });
          }
      });
     return completed.size;
  });

  getCompletedTasksForDay(day: number): number {
    const tasks = CURRICULUM.find(c => c.day === day)?.tasks || [];
    const allMetrics = this.store.metrics();
    let count = 0;
    tasks.forEach(task => {
        if (Object.values(allMetrics).some(m => m.taskStatus?.[task.id])) {
            count++;
        }
    });
    return count;
  }

  toggleTask(task: Task, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.store.updateTaskStatus(task.id, checked, task.xp);
  }
}
