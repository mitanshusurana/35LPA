import { signalStore, withState, withMethods, withComputed, withHooks, patchState } from '@ngrx/signals';
import { SprintState, INITIAL_SPRINT_STATE } from '../models/sprint-state.model';
import { DailyMetrics } from '../models/daily-metrics.model';
import { computed, effect } from '@angular/core';

const STORAGE_KEY = 'reality-sprint-tracker-state';

const DEFAULT_METRICS: DailyMetrics = {
  date: '',
  dsaTime: 0,
  lldTime: 0,
  csTime: 0,
  portfolioTime: 0,
  dsaCompleted: false,
  lldCompleted: false,
  csCompleted: false,
  portfolioCompleted: false,
  xp: 0,
  blockStatus: {},
  taskStatus: {}
};

export const SprintStore = signalStore(
  { providedIn: 'root' },
  withState(INITIAL_SPRINT_STATE),
  withComputed((store) => ({
    daysRemaining: computed(() => {
      if (!store.startDate()) return 45;
      const start = new Date(store.startDate()!);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - start.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      return Math.max(0, 45 - diffDays);
    }),
    currentDay: computed(() => {
        if (!store.startDate()) return 1;
        const start = new Date(store.startDate()!);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - start.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return Math.min(45, diffDays + 1); // Day 1 based
    }),
    todayMetrics: computed(() => {
      const today = new Date().toISOString().split('T')[0];
      return store.metrics()[today] || {
        ...DEFAULT_METRICS,
        date: today
      };
    }),
    totalXP: computed(() => {
      return Object.values(store.metrics()).reduce((acc, curr) => acc + curr.xp, 0);
    }),
    isGrayscale: computed(() => {
      if (!store.startDate()) return false;

      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      const startStr = store.startDate()!.split('T')[0];

      // If yesterday was before start date, no punishment
      if (yesterdayStr < startStr) return false;

      const yesterdayMetrics = store.metrics()[yesterdayStr];
      const xp = yesterdayMetrics ? yesterdayMetrics.xp : 0;

      // If XP < 200, punish
      return xp < 200;
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
        ...DEFAULT_METRICS,
        date: today
      };

      const updatedMetrics = { ...currentMetrics, ...metricUpdate };

      patchState(store, (state) => ({
        metrics: {
          ...state.metrics,
          [today]: updatedMetrics
        }
      }));
    },
    updateBlockStatus(blockId: string, status: any) {
        const today = new Date().toISOString().split('T')[0];
        const currentMetrics = store.metrics()[today] || {
            ...DEFAULT_METRICS,
            date: today
        };

        const updatedMetrics = {
            ...currentMetrics,
            blockStatus: {
                ...currentMetrics.blockStatus,
                [blockId]: status
            }
        };

        patchState(store, (state) => ({
            metrics: {
                ...state.metrics,
                [today]: updatedMetrics
            }
        }));
    },
    updateTaskStatus(taskId: string, completed: boolean, xpValue: number = 0) {
        const today = new Date().toISOString().split('T')[0];
        const currentMetrics = store.metrics()[today] || {
            ...DEFAULT_METRICS,
            date: today
        };

        const wasCompleted = !!currentMetrics.taskStatus[taskId];

        const updatedMetrics = {
            ...currentMetrics,
            taskStatus: {
                ...currentMetrics.taskStatus,
                [taskId]: completed
            }
        };

        if (completed && !wasCompleted) {
            updatedMetrics.xp = (updatedMetrics.xp || 0) + xpValue;
        } else if (!completed && wasCompleted) {
             updatedMetrics.xp = Math.max(0, (updatedMetrics.xp || 0) - xpValue);
        }

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
