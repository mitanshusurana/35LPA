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
  // Days 1-7 (Week 1: Fundamentals)
  ...Array.from({ length: 7 }, (_, i) => ({
    day: i + 1,
    tasks: [
      { id: `d1-${i}-dsa`, category: 'dsa' as TaskCategory, title: 'Arrays & Hashing (NeetCode 150)', sourceUrl: 'https://neetcode.io/practice?tab=arrays-and-hashing', completed: false, xp: 20 },
      { id: `d1-${i}-lld`, category: 'lld' as TaskCategory, title: 'SOLID Principles & Singleton', sourceUrl: 'https://refactoring.guru/design-patterns/singleton', completed: false, xp: 20 },
      { id: `d1-${i}-core`, category: 'core' as TaskCategory, title: 'DBMS: Normalization Forms (1NF-3NF)', sourceUrl: 'https://www.geeksforgeeks.org/database-normalization-normal-forms/', completed: false, xp: 20 }
    ]
  })),
  // Days 8-14 (Week 2: Advanced Data Structures & Concurrency)
  ...Array.from({ length: 7 }, (_, i) => ({
    day: i + 8,
    tasks: [
      { id: `d8-${i}-dsa`, category: 'dsa' as TaskCategory, title: 'Stack & Binary Search', sourceUrl: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/', completed: false, xp: 30 },
      { id: `d8-${i}-lld`, category: 'lld' as TaskCategory, title: 'Design Patterns: Factory Method', sourceUrl: 'https://refactoring.guru/design-patterns/factory-method', completed: false, xp: 30 },
      { id: `d8-${i}-core`, category: 'core' as TaskCategory, title: 'Java Concurrency: Thread Safety', sourceUrl: 'https://www.baeldung.com/java-thread-safety', completed: false, xp: 30 }
    ]
  })),
  // Days 15-21 (Week 3: Complex Systems & Networking)
  ...Array.from({ length: 7 }, (_, i) => ({
    day: i + 15,
    tasks: [
      { id: `d15-${i}-dsa`, category: 'dsa' as TaskCategory, title: 'Tries & Backtracking', sourceUrl: 'https://neetcode.io/practice?tab=tries', completed: false, xp: 30 },
      { id: `d15-${i}-lld`, category: 'lld' as TaskCategory, title: 'System Design: Rate Limiter', sourceUrl: 'https://github.com/donnemartin/system-design-primer?tab=readme-ov-file#design-a-rate-limiter-with-sliding-window', completed: false, xp: 50 },
      { id: `d15-${i}-core`, category: 'core' as TaskCategory, title: 'HTTP/HTTPS Handshake Internals', sourceUrl: 'https://cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/', completed: false, xp: 30 }
    ]
  })),
  // Days 22-26 (Week 4: Graphs & Security)
  ...Array.from({ length: 5 }, (_, i) => ({
    day: i + 22,
    tasks: [
      { id: `d22-${i}-dsa`, category: 'dsa' as TaskCategory, title: 'Graphs (BFS/DFS)', sourceUrl: 'https://neetcode.io/practice?tab=graphs', completed: false, xp: 40 },
      { id: `d22-${i}-lld`, category: 'lld' as TaskCategory, title: 'Design Patterns: Observer', sourceUrl: 'https://refactoring.guru/design-patterns/observer', completed: false, xp: 40 },
      { id: `d22-${i}-core`, category: 'core' as TaskCategory, title: 'Spring Security: JWT Flow', sourceUrl: 'https://jwt.io/introduction', completed: false, xp: 30 }
    ]
  })),
  // Days 27-30 (Week 5: Mock Tests & Portfolio)
  ...Array.from({ length: 4 }, (_, i) => ({
    day: i + 27,
    tasks: [
      { id: `d27-${i}-dsa`, category: 'dsa' as TaskCategory, title: 'Hard Mock Test (LeetCode Weekly)', sourceUrl: 'https://leetcode.com/contest/', completed: false, xp: 50 },
      { id: `d27-${i}-lld`, category: 'lld' as TaskCategory, title: 'Machine Coding: Parking Lot (Timed)', sourceUrl: 'https://workat.tech/machine-coding/practice/design-parking-lot-qm6hcxop', completed: false, xp: 50 },
      { id: `d27-${i}-portfolio`, category: 'portfolio' as TaskCategory, title: 'Load Testing with K6', sourceUrl: 'https://k6.io/docs/', completed: false, xp: 40 }
    ]
  }))
];
