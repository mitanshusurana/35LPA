import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-progress-ring',
  standalone: true,
  template: `
    <div class="relative flex flex-col items-center justify-center p-4">
      <!-- Ring SVG -->
      <svg class="w-24 h-24 transform -rotate-90">
        <!-- Background Circle -->
        <circle
          cx="48" cy="48" r="40"
          fill="none"
          stroke="currentColor"
          class="text-dracula-current opacity-30"
          stroke-width="8"
        />
        <!-- Progress Circle -->
        <circle
          cx="48" cy="48" r="40"
          fill="none"
          [attr.stroke]="color()"
          stroke-width="8"
          stroke-linecap="round"
          [attr.stroke-dasharray]="circumference"
          [attr.stroke-dashoffset]="dashOffset()"
          class="transition-all duration-1000 ease-out"
        />
      </svg>

      <!-- Center Text -->
      <div class="absolute inset-0 flex items-center justify-center -mt-6">
        <span class="text-sm font-bold font-mono" [style.color]="color()">
          {{ progress() }}%
        </span>
      </div>

      <!-- Label -->
      <span class="mt-2 text-[10px] font-bold uppercase tracking-wider text-dracula-foreground opacity-80 text-center">
        {{ label() }}
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressRingComponent {
  progress = input.required<number>(); // 0 to 100
  label = input.required<string>();
  color = input.required<string>(); // Hex color string

  readonly circumference = 2 * Math.PI * 40;

  dashOffset = computed(() => {
    // Ensure progress is within 0-100
    const p = Math.min(Math.max(this.progress(), 0), 100);
    // Calculate offset: full circumference - (progress fraction * circumference)
    // If progress is 100, offset is 0. If progress is 0, offset is full circumference.
    return this.circumference - (p / 100) * this.circumference;
  });
}
