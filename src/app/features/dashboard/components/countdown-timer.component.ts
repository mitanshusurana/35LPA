import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  template: `
    <div class="flex flex-col items-center justify-center p-6 bg-dracula-current rounded-xl shadow-lg border border-dracula-purple/20 w-full h-full">
      <div class="text-6xl font-bold font-mono text-dracula-purple drop-shadow-lg animate-pulse">
        {{ daysRemaining }}
      </div>
      <div class="text-sm font-semibold uppercase tracking-widest text-dracula-comment mt-2">
        Days Remaining
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownTimerComponent {
  @Input({ required: true }) daysRemaining!: number;
}
