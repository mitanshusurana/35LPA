import { DailyMetrics } from './daily-metrics.model';

export interface SprintState {
  startDate: string | null;
  metrics: Record<string, DailyMetrics>;
  streak: number;
}

export const INITIAL_SPRINT_STATE: SprintState = {
  startDate: null,
  metrics: {},
  streak: 0,
};
