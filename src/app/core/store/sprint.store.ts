import { signalStore, withState, withMethods, withComputed, withHooks, patchState } from '@ngrx/signals';
import { SprintState, INITIAL_SPRINT_STATE } from '../models/sprint-state.model';
import { DailyMetrics } from '../models/daily-metrics.model';
import { computed, effect } from '@angular/core';

const STORAGE_KEY = 'reality-sprint-tracker-state';

export const SprintStore = signalStore(
  { providedIn: 'root' },
  withState(INITIAL_SPRINT_STATE),
  withComputed((store) => ({
    daysRemaining: computed(() => {
      if (!store.startDate()) return 30;
      const start = new Date(store.startDate()!);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - start.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      return Math.max(0, 30 - diffDays);
    }),
    todayMetrics: computed(() => {
      const today = new Date().toISOString().split('T')[0];
      return store.metrics()[today] || {
        date: today,
        dsaTime: 0,
        lldTime: 0,
        csTime: 0,
        portfolioTime: 0,
        dsaCompleted: false,
        lldCompleted: false,
        csCompleted: false,
        portfolioCompleted: false,
        xp: 0
      } as DailyMetrics;
    }),
    totalXP: computed(() => {
      return Object.values(store.metrics()).reduce((acc, curr) => acc + curr.xp, 0);
    })
  })),
  withMethods((store) => ({
    initializeState() {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        patchState(store, JSON.parse(saved));
      } else {
        // First launch: Start the sprint immediately
        patchState(store, { startDate: new Date().toISOString() });
      }
    },
    updateDailyMetric(metricUpdate: Partial<DailyMetrics>) {
      const today = new Date().toISOString().split('T')[0];
      const currentMetrics = store.metrics()[today] || {
        date: today,
        dsaTime: 0,
        lldTime: 0,
        csTime: 0,
        portfolioTime: 0,
        dsaCompleted: false,
        lldCompleted: false,
        csCompleted: false,
        portfolioCompleted: false,
        xp: 0
      };

      const updatedMetrics = { ...currentMetrics, ...metricUpdate };

      // Calculate XP based on rules if needed, but for now just store what's passed or keep it simple.
      // Requirement: XP Rules: Easy DSA -> 10 XP...
      // We will implement XP calculation logic in the service or here.
      // For now, let's assume the component/service calculates XP updates.

      patchState(store, (state) => ({
        metrics: {
          ...state.metrics,
          [today]: updatedMetrics
        }
      }));
    }
  })),
  withHooks({
    onInit(store) {
      store.initializeState();

      // Auto-save effect
      effect(() => {
        const state = {
            startDate: store.startDate(),
            metrics: store.metrics(),
            streak: store.streak()
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      });
    }
  })
);
