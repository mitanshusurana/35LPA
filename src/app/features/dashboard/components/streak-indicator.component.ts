import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-streak-indicator',
  standalone: true,
  template: `
    <div class="flex flex-col items-center justify-center p-4 bg-dracula-current/50 rounded-lg border border-dracula-orange/30 shadow-lg h-full">
      <div class="text-3xl font-bold font-mono text-dracula-orange drop-shadow-md">
        🔥 {{ streak() }}
      </div>
      <div class="text-[10px] uppercase tracking-widest text-dracula-comment mt-1 font-semibold">
        Current Streak
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreakIndicatorComponent {
  streak = input.required<number>();
}
