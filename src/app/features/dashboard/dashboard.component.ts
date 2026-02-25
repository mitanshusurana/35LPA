import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { SprintStore } from '../../core/store/sprint.store';
import { CountdownTimerComponent } from './components/countdown-timer.component';
import { ProgressRingComponent } from './components/progress-ring.component';
import { DailyMeterComponent } from './components/daily-meter.component';
import { StreakIndicatorComponent } from './components/streak-indicator.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CountdownTimerComponent,
    ProgressRingComponent,
    DailyMeterComponent,
    StreakIndicatorComponent
  ],
  template: `
    <div class="min-h-screen bg-dracula-bg text-dracula-foreground p-4 flex flex-col gap-6 font-sans">
      <!-- Header -->
      <header class="flex justify-between items-center pb-4 border-b border-dracula-current/50">
        <h1 class="text-xl font-bold font-mono tracking-tighter text-dracula-cyan">
          REALITY SPRINT TRACKER
        </h1>
        <div class="text-xs text-dracula-comment font-mono">
          {{ today | date:'mediumDate' }}
        </div>
      </header>

      <!-- Top Row: Countdown & Streak -->
      <div class="grid grid-cols-2 gap-4">
        <app-countdown-timer [daysRemaining]="store.daysRemaining()" />
        <app-streak-indicator [streak]="store.streak()" />
      </div>

      <!-- Daily Focus Meter -->
      <app-daily-meter [minutes]="totalMinutes()" />

      <!-- Progress Rings Grid -->
      <div class="grid grid-cols-2 gap-4 mt-2">
        <!-- DSA (25%) - Target 2h -->
        <app-progress-ring
          label="DSA"
          [progress]="dsaProgress()"
          color="#ff79c6"
        />
        <!-- Machine Coding (40%) - Target 2.5h -->
        <app-progress-ring
          label="Machine Coding"
          [progress]="lldProgress()"
          color="#8be9fd"
        />
        <!-- CS Fundamentals (20%) - Target 1h -->
        <app-progress-ring
          label="CS Fundamentals"
          [progress]="csProgress()"
          color="#f1fa8c"
        />
        <!-- Portfolio (15%) - Target 2.5h -->
        <app-progress-ring
          label="Portfolio"
          [progress]="portfolioProgress()"
          color="#bd93f9"
        />
      </div>

      <!-- Footer / Motivation -->
      <div class="mt-auto text-center text-[10px] text-dracula-comment uppercase tracking-widest opacity-50 pb-4 pt-8">
        Engineering Maturity > UI Fluff
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  readonly store = inject(SprintStore);
  readonly today = new Date();

  dsaProgress = computed(() => {
    const target = 120;
    return Math.floor(Math.min((this.store.todayMetrics().dsaTime / target) * 100, 100));
  });

  lldProgress = computed(() => {
    const target = 150;
    return Math.floor(Math.min((this.store.todayMetrics().lldTime / target) * 100, 100));
  });

  csProgress = computed(() => {
    const target = 60;
    return Math.floor(Math.min((this.store.todayMetrics().csTime / target) * 100, 100));
  });

  portfolioProgress = computed(() => {
    const target = 150;
    return Math.floor(Math.min((this.store.todayMetrics().portfolioTime / target) * 100, 100));
  });

  totalMinutes = computed(() => {
    const m = this.store.todayMetrics();
    return m.dsaTime + m.lldTime + m.csTime + m.portfolioTime;
  });
}
