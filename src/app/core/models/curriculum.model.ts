export type TaskCategory = 'dsa' | 'lld' | 'core' | 'portfolio';

export interface Task {
  id: string;
  category: TaskCategory;
  title: string;
  sourceUrl?: string; // e.g., NeetCode link
  description?: string;
  completed: boolean;
  xp: number;
}

export interface DayCurriculum {
  day: number;
  tasks: Task[];
}

export const CURRICULUM: DayCurriculum[] = [
  // Days 1-7
  ...Array.from({ length: 7 }, (_, i) => ({
    day: i + 1,
    tasks: [
      { id: `d1-${i}-dsa`, category: 'dsa' as TaskCategory, title: 'Arrays, Hashing, Two Pointers', sourceUrl: 'https://neetcode.io/practice', completed: false, xp: 20 },
      { id: `d1-${i}-lld`, category: 'lld' as TaskCategory, title: 'SOLID Principles & Design Patterns', sourceUrl: 'https://refactoring.guru/design-patterns', completed: false, xp: 20 },
      { id: `d1-${i}-core`, category: 'core' as TaskCategory, title: 'DBMS Normalization & Indexing', sourceUrl: 'https://www.postgresql.org/docs/', completed: false, xp: 20 }
    ]
  })),
  // Days 8-14
  ...Array.from({ length: 7 }, (_, i) => ({
    day: i + 8,
    tasks: [
      { id: `d8-${i}-dsa`, category: 'dsa' as TaskCategory, title: 'Stack, Binary Search, Linked Lists', sourceUrl: 'https://takeuforward.org/', completed: false, xp: 30 },
      { id: `d8-${i}-lld`, category: 'lld' as TaskCategory, title: 'Thread-safe Double-Entry Ledger', sourceUrl: 'https://workat.tech/machine-coding', completed: false, xp: 50 },
      { id: `d8-${i}-core`, category: 'core' as TaskCategory, title: 'Java Concurrency & OS Threads', sourceUrl: 'https://www.baeldung.com/java-concurrency', completed: false, xp: 30 }
    ]
  })),
  // Days 15-21
  ...Array.from({ length: 7 }, (_, i) => ({
    day: i + 15,
    tasks: [
      { id: `d15-${i}-dsa`, category: 'dsa' as TaskCategory, title: 'Tries, Backtracking, Heaps', sourceUrl: 'https://neetcode.io/practice', completed: false, xp: 30 },
      { id: `d15-${i}-lld`, category: 'lld' as TaskCategory, title: 'Inventory / Booking System', sourceUrl: 'https://workat.tech/machine-coding', completed: false, xp: 50 },
      { id: `d15-${i}-core`, category: 'core' as TaskCategory, title: 'TCP/UDP & HTTP Internals', sourceUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP', completed: false, xp: 30 }
    ]
  })),
  // Days 22-26
  ...Array.from({ length: 5 }, (_, i) => ({
    day: i + 22,
    tasks: [
      { id: `d22-${i}-dsa`, category: 'dsa' as TaskCategory, title: 'Graphs & Dynamic Programming', sourceUrl: 'https://neetcode.io/practice', completed: false, xp: 40 },
      { id: `d22-${i}-lld`, category: 'lld' as TaskCategory, title: 'Cache / Rate Limiter Framework', sourceUrl: 'https://redis.io/docs/', completed: false, xp: 50 },
      { id: `d22-${i}-core`, category: 'core' as TaskCategory, title: 'Spring Security & JWT', sourceUrl: 'https://spring.io/guides', completed: false, xp: 30 }
    ]
  })),
  // Days 27-30
  ...Array.from({ length: 4 }, (_, i) => ({
    day: i + 27,
    tasks: [
      { id: `d27-${i}-dsa`, category: 'dsa' as TaskCategory, title: 'Hard Mock Tests', sourceUrl: 'https://leetcode.com/contest/', completed: false, xp: 50 },
      { id: `d27-${i}-lld`, category: 'lld' as TaskCategory, title: 'Timed Machine Coding (90m)', sourceUrl: 'https://workat.tech/machine-coding', completed: false, xp: 50 },
      { id: `d27-${i}-portfolio`, category: 'portfolio' as TaskCategory, title: 'Query Optimization & Load Testing', sourceUrl: 'https://k6.io/', completed: false, xp: 40 }
    ]
  }))
];
