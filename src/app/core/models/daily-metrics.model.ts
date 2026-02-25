export type BlockStatus = 'upcoming' | 'active' | 'completed' | 'failed';

export interface DailyMetrics {
  date: string; // YYYY-MM-DD
  dsaTime: number; // minutes
  lldTime: number; // minutes
  csTime: number; // minutes
  portfolioTime: number; // minutes
  dsaCompleted: boolean;
  lldCompleted: boolean;
  csCompleted: boolean;
  portfolioCompleted: boolean;
  xp: number;
  blockStatus: Record<string, BlockStatus>;
  taskStatus: Record<string, boolean>;
}
