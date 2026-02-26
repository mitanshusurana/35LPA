import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SprintStore } from './core/store/sprint.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <div class="flex flex-col h-screen bg-dracula-bg text-dracula-foreground transition-all duration-1000" [class.grayscale]="store.isGrayscale()">
      <!-- Main Content Area -->
      <main class="flex-1 overflow-y-auto pb-16">
        <router-outlet />
      </main>

      <!-- Bottom Navigation -->
      <nav class="fixed bottom-0 left-0 right-0 h-16 bg-dracula-current border-t border-dracula-comment/20 flex justify-around items-center z-50 shadow-2xl">

        <a routerLink="/dashboard" routerLinkActive="text-dracula-cyan scale-110" class="flex flex-col items-center justify-center p-2 text-dracula-comment transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span class="text-[10px] font-bold tracking-widest uppercase">Dash</span>
        </a>

        <a routerLink="/schedule" routerLinkActive="text-dracula-purple scale-110" class="flex flex-col items-center justify-center p-2 text-dracula-comment transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-[10px] font-bold tracking-widest uppercase">Schedule</span>
        </a>

        <!-- Task Button (Active) -->
        <a routerLink="/tasks" routerLinkActive="text-dracula-pink scale-110" class="flex flex-col items-center justify-center p-2 text-dracula-comment transition-all duration-300">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <span class="text-[10px] font-bold tracking-widest uppercase">Tasks</span>
        </a>

      </nav>

      <!-- Punishment Overlay Notification -->
      @if (store.isGrayscale()) {
        <div class="fixed top-4 left-4 right-4 bg-dracula-red text-white p-4 rounded shadow-2xl z-50 animate-bounce text-center font-bold font-mono border-2 border-white">
          MOMENTUM LOST. EXECUTE TO RESTORE COLOR.
        </div>
      }
    </div>
  `
})
export class App {
  store = inject(SprintStore);
}
