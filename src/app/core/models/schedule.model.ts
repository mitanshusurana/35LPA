export type BlockType = 'consume' | 'execute' | 'break' | 'lld' | 'deep-tech' | 'portfolio' | 'review';

export type BlockStatus = 'upcoming' | 'active' | 'completed' | 'failed';

export interface TimeBlock {
  id: string;
  startTime: string; // HH:mm
  endTime: string;   // HH:mm
  type: BlockType;
  title: string;
  description: string;
  status: BlockStatus;
  durationMinutes: number;
}

export const DAILY_SCHEDULE: TimeBlock[] = [
  {
    id: 'block-1',
    startTime: '08:00',
    endTime: '09:00',
    type: 'consume',
    title: 'Consume',
    description: 'DSA patterns + CS theory (OS / CN rotation)',
    status: 'upcoming',
    durationMinutes: 60
  },
  {
    id: 'block-2',
    startTime: '09:00',
    endTime: '12:00',
    type: 'execute',
    title: 'Execute',
    description: 'LeetCode (3–4 Medium / Hard only)',
    status: 'upcoming',
    durationMinutes: 180
  },
  {
    id: 'block-3',
    startTime: '12:00',
    endTime: '13:00',
    type: 'break',
    title: 'Break',
    description: 'Recover',
    status: 'upcoming',
    durationMinutes: 60
  },
  {
    id: 'block-4',
    startTime: '13:00',
    endTime: '15:30', // 2.5 hours
    type: 'lld',
    title: 'Machine Coding (LLD)',
    description: '90-minute timed execution + review buffer. Java only. Must compile.',
    status: 'upcoming',
    durationMinutes: 150
  },
  {
    id: 'block-6',
    startTime: '15:30',
    endTime: '16:30',
    type: 'deep-tech',
    title: 'Deep Tech',
    description: 'PostgreSQL internals, Spring Boot internals.',
    status: 'upcoming',
    durationMinutes: 60
  },
  {
    id: 'block-7',
    startTime: '16:30',
    endTime: '17:30',
    type: 'break',
    title: 'Break',
    description: 'Recover',
    status: 'upcoming',
    durationMinutes: 60
  },
  {
    id: 'block-8',
    startTime: '17:30',
    endTime: '19:30',
    type: 'portfolio',
    title: 'Build Portfolio System',
    description: 'Accounting ledger and inventory architecture.',
    status: 'upcoming',
    durationMinutes: 120
  },
  {
    id: 'block-9',
    startTime: '19:30',
    endTime: '20:30',
    type: 'review',
    title: 'Review & Verbalization',
    description: 'Explain solutions aloud as in interviews.',
    status: 'upcoming',
    durationMinutes: 60
  }
];
