import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-daily-meter',
  standalone: true,
  template: `
    <div class="flex flex-col gap-2 p-4 bg-dracula-current/20 rounded-lg border border-dracula-comment/10">
      <div class="flex justify-between items-end text-xs font-mono text-dracula-comment uppercase tracking-wide">
        <span>Daily Focus</span>
        <span class="text-dracula-cyan font-bold">{{ currentHours() }}h / 8h</span>
      </div>

      <div class="relative w-full h-4 bg-dracula-current rounded-full overflow-hidden shadow-inner">
        <!-- Progress Bar -->
        <div
          class="h-full bg-gradient-to-r from-dracula-purple to-dracula-pink transition-all duration-1000 ease-out"
          [style.width.%]="percentage()"
        ></div>

        <!-- Target Line (8h marker at 66.6% assuming 12h max) -->
        <div class="absolute top-0 bottom-0 w-0.5 bg-dracula-green left-[66.6%] opacity-50 z-10 pointer-events-none"></div>
      </div>

      <div class="flex justify-between text-[10px] text-dracula-comment font-mono mt-1 opacity-50">
        <span>0h</span>
        <span class="text-dracula-green font-bold">Target</span>
        <span>12h+</span>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyMeterComponent {
  minutes = input.required<number>();

  currentHours = computed(() => (this.minutes() / 60).toFixed(1));

  percentage = computed(() => {
    // Scale: 0 to 12 hours (720 mins)
    // If minutes > 720, cap at 100%
    const p = (this.minutes() / 720) * 100;
    return Math.min(Math.max(p, 0), 100);
  });
}
