export type TaskCategory = 'dsa' | 'lld' | 'core' | 'portfolio' | 'hld' | 'prep';

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
  // --- WEEK 1: FOUNDATIONS ---
  {
    day: 1,
    tasks: [
      { id: 'd1-dsa-1', category: 'dsa', title: 'Consume: Arrays & Hashing (NeetCode)', sourceUrl: 'https://neetcode.io/practice', completed: false, xp: 10 },
      { id: 'd1-dsa-2', category: 'dsa', title: 'Execute: Two Sum', sourceUrl: 'https://leetcode.com/problems/two-sum/', completed: false, xp: 20 },
      { id: 'd1-dsa-3', category: 'dsa', title: 'Execute: Valid Anagram', sourceUrl: 'https://leetcode.com/problems/valid-anagram/', completed: false, xp: 20 },
      { id: 'd1-lld-1', category: 'lld', title: 'Consume: SOLID Principles', sourceUrl: 'https://www.baeldung.com/solid-principles', completed: false, xp: 20 },
      { id: 'd1-lld-2', category: 'lld', title: 'Execute: Refactor Class using Interfaces', description: 'Write a Java class violating all 5 principles, refactor strictly using Interfaces.', completed: false, xp: 30 },
      { id: 'd1-core-1', category: 'core', title: 'Consume: Postgres MVCC', sourceUrl: 'https://www.postgresql.org/docs/current/mvcc-intro.html', completed: false, xp: 20 },
      { id: 'd1-core-2', category: 'core', title: 'Execute: Map Row Visibility to XID', description: 'Document how Postgres avoids read locks.', completed: false, xp: 20 },
      { id: 'd1-port-1', category: 'portfolio', title: 'Consume: Spring Initializr', sourceUrl: 'https://start.spring.io/', completed: false, xp: 10 },
      { id: 'd1-port-2', category: 'portfolio', title: 'Execute: Init Workspace & DB Tables', description: 'Init Angular workspace. Init Spring Boot. Create ledger_entries & inventory tables.', completed: false, xp: 30 }
    ]
  },
  {
    day: 2,
    tasks: [
      { id: 'd2-dsa-1', category: 'dsa', title: 'Consume: Two Pointers', sourceUrl: 'https://takeuforward.org/data-structure/two-pointer-technique/', completed: false, xp: 10 },
      { id: 'd2-dsa-2', category: 'dsa', title: 'Execute: Container With Most Water', sourceUrl: 'https://leetcode.com/problems/container-with-most-water/', completed: false, xp: 20 },
      { id: 'd2-dsa-3', category: 'dsa', title: 'Execute: 3Sum', sourceUrl: 'https://leetcode.com/problems/3sum/', completed: false, xp: 20 },
      { id: 'd2-lld-1', category: 'lld', title: 'Consume: Factory Method', sourceUrl: 'https://refactoring.guru/design-patterns/factory-method', completed: false, xp: 20 },
      { id: 'd2-lld-2', category: 'lld', title: 'Execute: Dynamic Tax Calculator', description: 'Implement a dynamic tax calculator interface (GST/Customs) using a Factory.', completed: false, xp: 30 },
      { id: 'd2-core-1', category: 'core', title: 'Consume: ACID Transactions', sourceUrl: 'https://www.databricks.com/glossary/acid-transactions', completed: false, xp: 20 },
      { id: 'd2-core-2', category: 'core', title: 'Execute: Atomicity vs Durability', description: 'Explain Atomicity vs Durability trade-offs.', completed: false, xp: 20 },
      { id: 'd2-port-1', category: 'portfolio', title: 'Consume: Spring Data JPA', sourceUrl: 'https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa', completed: false, xp: 10 },
      { id: 'd2-port-2', category: 'portfolio', title: 'Execute: JPA Entities', description: 'Build JPA entities. Ensure debits strictly equal credits before insertion.', completed: false, xp: 30 }
    ]
  },
  {
    day: 3,
    tasks: [
      { id: 'd3-dsa-1', category: 'dsa', title: 'Consume: Sliding Window', sourceUrl: 'https://www.geeksforgeeks.org/window-sliding-technique/', completed: false, xp: 10 },
      { id: 'd3-dsa-2', category: 'dsa', title: 'Execute: Longest Substring No Repeats', sourceUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', completed: false, xp: 20 },
      { id: 'd3-lld-1', category: 'lld', title: 'Consume: Observer Pattern', sourceUrl: 'https://refactoring.guru/design-patterns/observer', completed: false, xp: 20 },
      { id: 'd3-lld-2', category: 'lld', title: 'Execute: Real-time Gold Price Alerts', description: 'Build an Event Listener system for real-time gold price fluctuation alerts.', completed: false, xp: 30 },
      { id: 'd3-core-1', category: 'core', title: 'Consume: SQL Indexing', sourceUrl: 'https://www.postgresql.org/docs/current/indexes.html', completed: false, xp: 20 },
      { id: 'd3-core-2', category: 'core', title: 'Execute: B-Tree vs Hash Indexes', description: 'Compare B-Tree vs Hash indexes for range queries on transaction dates.', completed: false, xp: 20 },
      { id: 'd3-port-1', category: 'portfolio', title: 'Consume: Angular Reactive Forms', sourceUrl: 'https://angular.dev/guide/forms/reactive-forms', completed: false, xp: 10 },
      { id: 'd3-port-2', category: 'portfolio', title: 'Execute: Manual Journal Entry UI', description: 'Create Angular UI for manual journal entry inputs using strict Reactive Forms.', completed: false, xp: 30 }
    ]
  },
  {
    day: 4,
    tasks: [
      { id: 'd4-dsa-1', category: 'dsa', title: 'Consume: Stack', sourceUrl: 'https://neetcode.io/practice', completed: false, xp: 10 },
      { id: 'd4-dsa-2', category: 'dsa', title: 'Execute: Valid Parentheses', sourceUrl: 'https://leetcode.com/problems/valid-parentheses/', completed: false, xp: 20 },
      { id: 'd4-dsa-3', category: 'dsa', title: 'Execute: Daily Temperatures', sourceUrl: 'https://leetcode.com/problems/daily-temperatures/', completed: false, xp: 20 },
      { id: 'd4-lld-1', category: 'lld', title: 'Consume: In-Memory Cache Design', sourceUrl: 'https://github.com/donnemartin/system-design-primer#cache', completed: false, xp: 20 },
      { id: 'd4-lld-2', category: 'lld', title: 'Execute: Extensible Key-Value Store', description: 'Write executable Java code for an extensible Key-Value store with TTL.', completed: false, xp: 30 },
      { id: 'd4-core-1', category: 'core', title: 'Consume: Process vs Thread', sourceUrl: 'https://www.baeldung.com/cs/process-vs-thread', completed: false, xp: 20 },
      { id: 'd4-core-2', category: 'core', title: 'Execute: Context Switching Overhead', description: 'Document context switching overhead and memory sharing differences.', completed: false, xp: 20 },
      { id: 'd4-port-1', category: 'portfolio', title: 'Consume: Spring Exception Handling', sourceUrl: 'https://www.baeldung.com/exception-handling-for-rest-with-spring', completed: false, xp: 10 },
      { id: 'd4-port-2', category: 'portfolio', title: 'Execute: Global API Error Mapping', description: 'Implement @ControllerAdvice for global API error mapping to standard JSON.', completed: false, xp: 30 }
    ]
  },
  {
    day: 5,
    tasks: [
      { id: 'd5-dsa-1', category: 'dsa', title: 'Consume: Binary Search', sourceUrl: 'https://takeuforward.org/binary-search/binary-search-algorithm/', completed: false, xp: 10 },
      { id: 'd5-dsa-2', category: 'dsa', title: 'Execute: Search in Rotated Array', sourceUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', completed: false, xp: 20 },
      { id: 'd5-lld-1', category: 'lld', title: 'Consume: Design Parking Lot', sourceUrl: 'https://www.educative.io/courses/grokking-the-object-oriented-design-interview/design-a-parking-lot', completed: false, xp: 20 },
      { id: 'd5-lld-2', category: 'lld', title: 'Execute: Parking Lot (Timed 90m)', description: 'Machine Coding (90 mins). Design entry/exit gates, ticketing, and spot allocation.', completed: false, xp: 50 },
      { id: 'd5-core-1', category: 'core', title: 'Consume: OS Deadlocks', sourceUrl: 'https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/', completed: false, xp: 20 },
      { id: 'd5-core-2', category: 'core', title: 'Execute: Deadlock Simulation & Fix', description: 'Write code that intentionally causes a deadlock, then fix it using Lock Ordering.', completed: false, xp: 20 },
      { id: 'd5-port-1', category: 'portfolio', title: 'Consume: RxJS HTTP', sourceUrl: 'https://angular.dev/guide/http/making-requests', completed: false, xp: 10 },
      { id: 'd5-port-2', category: 'portfolio', title: 'Execute: API Service Layer', description: 'Build Angular service layer to handle API calls via RxJS Observables with retry logic.', completed: false, xp: 30 }
    ]
  },
  {
    day: 6,
    tasks: [
      { id: 'd6-dsa-1', category: 'dsa', title: 'Consume: Linked List', sourceUrl: 'https://neetcode.io/practice', completed: false, xp: 10 },
      { id: 'd6-dsa-2', category: 'dsa', title: 'Execute: Reverse Nodes in k-Group', sourceUrl: 'https://leetcode.com/problems/reverse-nodes-in-k-group/', completed: false, xp: 30 },
      { id: 'd6-lld-1', category: 'lld', title: 'Consume: Decorator Pattern', sourceUrl: 'https://refactoring.guru/design-patterns/decorator', completed: false, xp: 20 },
      { id: 'd6-lld-2', category: 'lld', title: 'Execute: Layered Pricing Models', description: 'Implement layered pricing models (Base Gold Rate + Making Charge + GST).', completed: false, xp: 30 },
      { id: 'd6-core-1', category: 'core', title: 'Consume: TCP Internals', sourceUrl: 'https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/', completed: false, xp: 20 },
      { id: 'd6-core-2', category: 'core', title: 'Execute: 3-Way Handshake', description: 'Explain the 3-way handshake and connection teardown.', completed: false, xp: 20 },
      { id: 'd6-port-1', category: 'portfolio', title: 'Consume: Mockito Series', sourceUrl: 'https://www.baeldung.com/mockito-series', completed: false, xp: 10 },
      { id: 'd6-port-2', category: 'portfolio', title: 'Execute: Ledger Unit Tests', description: 'Write JUnit 5 + Mockito tests validating the POS ledger\'s debit/credit rule.', completed: false, xp: 30 }
    ]
  },
  {
    day: 7,
    tasks: [
      { id: 'd7-dsa-1', category: 'dsa', title: 'Consume: Tree Traversal', sourceUrl: 'https://takeuforward.org/data-structure/binary-tree-traversal/', completed: false, xp: 10 },
      { id: 'd7-dsa-2', category: 'dsa', title: 'Execute: Invert Binary Tree', sourceUrl: 'https://leetcode.com/problems/invert-binary-tree/', completed: false, xp: 20 },
      { id: 'd7-dsa-3', category: 'dsa', title: 'Execute: Max Depth Binary Tree', sourceUrl: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', completed: false, xp: 20 },
      { id: 'd7-lld-1', category: 'lld', title: 'Consume: LRU Cache Design', sourceUrl: 'https://bytebytego.com/', completed: false, xp: 20 },
      { id: 'd7-lld-2', category: 'lld', title: 'Execute: Implement LRU Cache', sourceUrl: 'https://leetcode.com/problems/lru-cache/', completed: false, xp: 30 },
      { id: 'd7-core-1', category: 'core', title: 'Consume: HTTP/2 Performance', sourceUrl: 'https://web.dev/articles/performance-http2', completed: false, xp: 20 },
      { id: 'd7-core-2', category: 'core', title: 'Execute: Head-of-Line Blocking', description: 'Contrast HTTP/1.1 head-of-line blocking with HTTP/2 multiplexed streams.', completed: false, xp: 20 },
      { id: 'd7-port-1', category: 'portfolio', title: 'Consume: Capacitor Preferences', sourceUrl: 'https://capacitorjs.com/docs/apis/preferences', completed: false, xp: 10 },
      { id: 'd7-port-2', category: 'portfolio', title: 'Execute: Offline Sync Engine', description: 'Use Capacitor API to cache POS ledger transactions locally when offline.', completed: false, xp: 30 }
    ]
  },

  // --- WEEK 2: ADVANCED STRUCTURES & CONCURRENCY ---
  {
    day: 8,
    tasks: [
      { id: 'd8-dsa-1', category: 'dsa', title: 'Consume: Trees (Medium)', sourceUrl: 'https://neetcode.io/practice', completed: false, xp: 10 },
      { id: 'd8-dsa-2', category: 'dsa', title: 'Execute: Level Order Traversal', sourceUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', completed: false, xp: 20 },
      { id: 'd8-dsa-3', category: 'dsa', title: 'Execute: LCA of BST', sourceUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', completed: false, xp: 20 },
      { id: 'd8-lld-1', category: 'lld', title: 'Consume: Builder Pattern', sourceUrl: 'https://refactoring.guru/design-patterns/builder', completed: false, xp: 20 },
      { id: 'd8-lld-2', category: 'lld', title: 'Execute: Thread-Safe Singleton', description: 'Implement a Thread-Safe Singleton (Bill Pugh) for PostgreSQL database connections.', completed: false, xp: 30 },
      { id: 'd8-core-1', category: 'core', title: 'Consume: Java Volatile', sourceUrl: 'https://www.baeldung.com/java-volatile', completed: false, xp: 20 },
      { id: 'd8-core-2', category: 'core', title: 'Execute: Hardware Memory Architecture', description: 'Explain hardware memory architecture and how volatile prevents thread caching.', completed: false, xp: 20 },
      { id: 'd8-port-1', category: 'portfolio', title: 'Consume: Isolation Levels', sourceUrl: 'https://www.postgresql.org/docs/current/transaction-iso.html', completed: false, xp: 10 },
      { id: 'd8-port-2', category: 'portfolio', title: 'Execute: Serializable Transactions', description: 'Configure @Transactional(isolation = Isolation.SERIALIZABLE) for the ledger service.', completed: false, xp: 30 }
    ]
  },
  {
    day: 9,
    tasks: [
      { id: 'd9-dsa-1', category: 'dsa', title: 'Consume: Heap Data Structure', sourceUrl: 'https://www.geeksforgeeks.org/heap-data-structure/', completed: false, xp: 10 },
      { id: 'd9-dsa-2', category: 'dsa', title: 'Execute: Top K Frequent Elements', sourceUrl: 'https://leetcode.com/problems/top-k-frequent-elements/', completed: false, xp: 20 },
      { id: 'd9-lld-1', category: 'lld', title: 'Consume: Grokking OOD', sourceUrl: 'https://www.educative.io/courses/grokking-the-object-oriented-design-interview', completed: false, xp: 20 },
      { id: 'd9-lld-2', category: 'lld', title: 'Execute: Expense Sharing (Timed)', description: 'Machine Coding (90 mins). Base entities for Users, Groups, and Exact/Percent Splits.', completed: false, xp: 50 },
      { id: 'd9-core-1', category: 'core', title: 'Consume: Concurrency Locks', sourceUrl: 'https://www.baeldung.com/java-concurrent-locks', completed: false, xp: 20 },
      { id: 'd9-core-2', category: 'core', title: 'Execute: ReentrantLock Refactor', description: 'Refactor synchronized blocks using ReentrantLock and Condition variables.', completed: false, xp: 20 },
      { id: 'd9-port-1', category: 'portfolio', title: 'Consume: Optimistic Locking', sourceUrl: 'https://www.baeldung.com/jpa-optimistic-locking', completed: false, xp: 10 },
      { id: 'd9-port-2', category: 'portfolio', title: 'Execute: Prevent Overselling', description: 'Add @Version to bullion inventory to prevent concurrent overselling of unique pieces.', completed: false, xp: 30 }
    ]
  },
  {
    day: 10,
    tasks: [
      { id: 'd10-dsa-1', category: 'dsa', title: 'Consume: Backtracking', sourceUrl: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/', completed: false, xp: 10 },
      { id: 'd10-dsa-2', category: 'dsa', title: 'Execute: Combination Sum', sourceUrl: 'https://leetcode.com/problems/combination-sum/', completed: false, xp: 20 },
      { id: 'd10-dsa-3', category: 'dsa', title: 'Execute: Subsets', sourceUrl: 'https://leetcode.com/problems/subsets/', completed: false, xp: 20 },
      { id: 'd10-lld-1', category: 'lld', title: 'Consume: Min Cash Flow', sourceUrl: 'https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/', completed: false, xp: 20 },
      { id: 'd10-lld-2', category: 'lld', title: 'Execute: Debt Routing Algorithm', description: 'Add debt simplification algorithm (Min-Cash Flow via graphs) to Splitwise code.', completed: false, xp: 30 },
      { id: 'd10-core-1', category: 'core', title: 'Consume: Spring AOP', sourceUrl: 'https://docs.spring.io/spring-framework/reference/core/aop.html', completed: false, xp: 20 },
      { id: 'd10-core-2', category: 'core', title: 'Execute: AOP Proxies', description: 'Detail how Spring creates AOP proxies around @Transactional methods.', completed: false, xp: 20 },
      { id: 'd10-port-1', category: 'portfolio', title: 'Consume: BehaviorSubject', sourceUrl: 'https://rxjs.dev/api/index/class/BehaviorSubject', completed: false, xp: 10 },
      { id: 'd10-port-2', category: 'portfolio', title: 'Execute: Offline Queue', description: 'Implement an Angular BehaviorSubject to manage the queue of pending offline transactions.', completed: false, xp: 30 }
    ]
  },
  {
    day: 11,
    tasks: [
      { id: 'd11-dsa-1', category: 'dsa', title: 'Consume: Tries', sourceUrl: 'https://neetcode.io/practice', completed: false, xp: 10 },
      { id: 'd11-dsa-2', category: 'dsa', title: 'Execute: Implement Trie', sourceUrl: 'https://leetcode.com/problems/implement-trie-prefix-tree/', completed: false, xp: 20 },
      { id: 'd11-lld-1', category: 'lld', title: 'Consume: Booking System Design', sourceUrl: 'https://www.educative.io/courses/grokking-the-object-oriented-design-interview', completed: false, xp: 20 },
      { id: 'd11-lld-2', category: 'lld', title: 'Execute: Booking System (Timed)', description: 'Machine Coding (90 mins). Scaffold Cinemas, Screens, Shows, and Seats.', completed: false, xp: 50 },
      { id: 'd11-core-1', category: 'core', title: 'Consume: Thread Pools', sourceUrl: 'https://www.baeldung.com/java-executor-service-tutorial', completed: false, xp: 20 },
      { id: 'd11-core-2', category: 'core', title: 'Execute: Custom ThreadPool', description: 'Implement a custom ThreadPool configuration using CompletableFuture.', completed: false, xp: 20 },
      { id: 'd11-port-1', category: 'portfolio', title: 'Consume: Network Interceptors', sourceUrl: 'https://angular.dev/guide/http/interceptors', completed: false, xp: 10 },
      { id: 'd11-port-2', category: 'portfolio', title: 'Execute: Retry Interceptor', description: 'Create an Angular HTTP Interceptor to automatically retry failed network requests.', completed: false, xp: 30 }
    ]
  },
  {
    day: 12,
    tasks: [
      { id: 'd12-dsa-1', category: 'dsa', title: 'Consume: Graph Representation', sourceUrl: 'https://takeuforward.org/graph/graph-representation-in-c/', completed: false, xp: 10 },
      { id: 'd12-dsa-2', category: 'dsa', title: 'Execute: Number of Islands', sourceUrl: 'https://leetcode.com/problems/number-of-islands/', completed: false, xp: 20 },
      { id: 'd12-dsa-3', category: 'dsa', title: 'Execute: Clone Graph', sourceUrl: 'https://leetcode.com/problems/clone-graph/', completed: false, xp: 20 },
      { id: 'd12-lld-1', category: 'lld', title: 'Consume: Redis Expiration', sourceUrl: 'https://redis.io/commands/expire/', completed: false, xp: 20 },
      { id: 'd12-lld-2', category: 'lld', title: 'Execute: Seat Locking Mechanism', description: 'Implement a 5-minute temporary lock on BookMyShow seats using Redis/HashMap TTL.', completed: false, xp: 30 },
      { id: 'd12-core-1', category: 'core', title: 'Consume: Connection Pooling', sourceUrl: 'https://www.baeldung.com/hikaricp', completed: false, xp: 20 },
      { id: 'd12-core-2', category: 'core', title: 'Execute: HikariCP Config', description: 'Configure Spring Boot HikariCP settings (maximumPoolSize, connectionTimeout).', completed: false, xp: 20 },
      { id: 'd12-port-1', category: 'portfolio', title: 'Consume: Capacitor Network API', sourceUrl: 'https://capacitorjs.com/docs/apis/network', completed: false, xp: 10 },
      { id: 'd12-port-2', category: 'portfolio', title: 'Execute: Sync Execution', description: 'Listen for device online events and flush the local offline queue to the backend.', completed: false, xp: 30 }
    ]
  },
  {
    day: 13,
    tasks: [
      { id: 'd13-dsa-1', category: 'dsa', title: 'Consume: Topological Sort', sourceUrl: 'https://www.geeksforgeeks.org/topological-sorting/', completed: false, xp: 10 },
      { id: 'd13-dsa-2', category: 'dsa', title: 'Execute: Course Schedule', sourceUrl: 'https://leetcode.com/problems/course-schedule/', completed: false, xp: 20 },
      { id: 'd13-lld-1', category: 'lld', title: 'Consume: Snake & Ladder Problem', sourceUrl: 'https://www.geeksforgeeks.org/snake-ladder-problem-2/', completed: false, xp: 20 },
      { id: 'd13-lld-2', category: 'lld', title: 'Execute: Board Game (Timed)', description: 'Machine Coding (90 mins). Focus on extensible rules (multiple dice, new board pieces).', completed: false, xp: 50 },
      { id: 'd13-core-1', category: 'core', title: 'Consume: API Idempotency', sourceUrl: 'https://docs.stripe.com/api/idempotent_requests', completed: false, xp: 20 },
      { id: 'd13-core-2', category: 'core', title: 'Execute: Idempotency Keys', description: 'Explain how idempotency keys prevent double-charging on network timeouts.', completed: false, xp: 20 },
      { id: 'd13-port-1', category: 'portfolio', title: 'Consume: Idempotent REST APIs', sourceUrl: 'https://www.baeldung.com/cs/idempotency-rest-apis', completed: false, xp: 10 },
      { id: 'd13-port-2', category: 'portfolio', title: 'Execute: Implement Idempotency', description: 'Add an idempotency_key column to ledger_entries and reject duplicates.', completed: false, xp: 30 }
    ]
  },
  {
    day: 14,
    tasks: [
      { id: 'd14-dsa-1', category: 'dsa', title: 'Consume: 1-D DP', sourceUrl: 'https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/', completed: false, xp: 10 },
      { id: 'd14-dsa-2', category: 'dsa', title: 'Execute: Climbing Stairs', sourceUrl: 'https://leetcode.com/problems/climbing-stairs/', completed: false, xp: 20 },
      { id: 'd14-dsa-3', category: 'dsa', title: 'Execute: House Robber', sourceUrl: 'https://leetcode.com/problems/house-robber/', completed: false, xp: 20 },
      { id: 'd14-lld-1', category: 'lld', title: 'Consume: State Pattern', sourceUrl: 'https://refactoring.guru/design-patterns/state', completed: false, xp: 20 },
      { id: 'd14-lld-2', category: 'lld', title: 'Execute: ATM Machine', description: 'Design an ATM machine handling state transitions (Idle, HasCard, Dispensing).', completed: false, xp: 30 },
      { id: 'd14-core-1', category: 'core', title: 'Consume: Redis Eviction', sourceUrl: 'https://redis.io/docs/reference/clients/#maxmemory-and-eviction-policies', completed: false, xp: 20 },
      { id: 'd14-core-2', category: 'core', title: 'Execute: LRU Policies', description: 'Compare allkeys-lru vs volatile-lru.', completed: false, xp: 20 },
      { id: 'd14-port-1', category: 'portfolio', title: 'Consume: TestContainers', sourceUrl: 'https://testcontainers.com/guides/testing-spring-boot-rest-api-part-1/', completed: false, xp: 10 },
      { id: 'd14-port-2', category: 'portfolio', title: 'Execute: Integration Testing', description: 'Spin up a Docker Postgres DB and run full ledger transaction flows.', completed: false, xp: 30 }
    ]
  },

  // --- WEEK 3: SYSTEMS & ARCHITECTURE ---
  {
    day: 15,
    tasks: [
      { id: 'd15-dsa-1', category: 'dsa', title: 'Consume: 2-D DP', sourceUrl: 'https://neetcode.io/practice', completed: false, xp: 10 },
      { id: 'd15-dsa-2', category: 'dsa', title: 'Execute: Unique Paths', sourceUrl: 'https://leetcode.com/problems/unique-paths/', completed: false, xp: 20 },
      { id: 'd15-hld-1', category: 'hld', title: 'Consume: Design Rate Limiter', sourceUrl: 'https://bytebytego.com/courses/system-design-interview/design-a-rate-limiter', completed: false, xp: 20 },
      { id: 'd15-hld-2', category: 'hld', title: 'Execute: Token Bucket vs Sliding Window', description: 'Design an API Rate Limiter. Understand Token Bucket vs Sliding Window.', completed: false, xp: 30 },
      { id: 'd15-core-1', category: 'core', title: 'Consume: Spring Filters', sourceUrl: 'https://docs.spring.io/spring-security/reference/servlet/architecture.html', completed: false, xp: 20 },
      { id: 'd15-core-2', category: 'core', title: 'Execute: SecurityFilterChain', description: 'Document the DelegatingFilterProxy and SecurityFilterChain.', completed: false, xp: 20 },
      { id: 'd15-port-1', category: 'portfolio', title: 'Consume: Spring Security JWT', sourceUrl: 'https://www.baeldung.com/spring-security-oauth-jwt', completed: false, xp: 10 },
      { id: 'd15-port-2', category: 'portfolio', title: 'Execute: Auth Configuration', description: 'Integrate Spring Security. Define UserDetailsService and BCrypt hashing.', completed: false, xp: 30 }
    ]
  },
  {
    day: 16,
    tasks: [
      { id: 'd16-dsa-1', category: 'dsa', title: 'Consume: Greedy Algorithm', sourceUrl: 'https://takeuforward.org/data-structure/greedy-algorithm/', completed: false, xp: 10 },
      { id: 'd16-dsa-2', category: 'dsa', title: 'Execute: Jump Game', sourceUrl: 'https://leetcode.com/problems/jump-game/', completed: false, xp: 20 },
      { id: 'd16-hld-1', category: 'hld', title: 'Consume: Load Balancers', sourceUrl: 'https://github.com/donnemartin/system-design-primer#load-balancer', completed: false, xp: 20 },
      { id: 'd16-hld-2', category: 'hld', title: 'Execute: Layer 4 vs Layer 7', description: 'Understand Layer 4 vs Layer 7 Load Balancing. Consistent Hashing.', completed: false, xp: 30 },
      { id: 'd16-core-1', category: 'core', title: 'Consume: Stateless JWTs', sourceUrl: 'https://jwt.io/introduction', completed: false, xp: 20 },
      { id: 'd16-core-2', category: 'core', title: 'Execute: JWT Anatomy', description: 'Explain JWT anatomy, signature verification, and why it is stateless.', completed: false, xp: 20 },
      { id: 'd16-port-1', category: 'portfolio', title: 'Consume: Angular Guards', sourceUrl: 'https://angular.dev/guide/routing/router-reference#guards', completed: false, xp: 10 },
      { id: 'd16-port-2', category: 'portfolio', title: 'Execute: CanActivateFn', description: 'Implement CanActivateFn to protect the POS routes in the app.', completed: false, xp: 30 }
    ]
  },
  {
    day: 17,
    tasks: [
      { id: 'd17-dsa-1', category: 'dsa', title: 'Consume: Intervals', sourceUrl: 'https://neetcode.io/practice', completed: false, xp: 10 },
      { id: 'd17-dsa-2', category: 'dsa', title: 'Execute: Merge Intervals', sourceUrl: 'https://leetcode.com/problems/merge-intervals/', completed: false, xp: 20 },
      { id: 'd17-hld-1', category: 'hld', title: 'Consume: Database Scaling', sourceUrl: 'https://bytebytego.com/courses/system-design-interview/scale-from-zero-to-millions-of-users', completed: false, xp: 20 },
      { id: 'd17-hld-2', category: 'hld', title: 'Execute: Sharding & Replication', description: 'Master Sharding, Replication (Master-Slave), and CAP Theorem.', completed: false, xp: 30 },
      { id: 'd17-core-1', category: 'core', title: 'Consume: Postgres CTEs', sourceUrl: 'https://www.postgresql.org/docs/current/queries-with.html', completed: false, xp: 20 },
      { id: 'd17-core-2', category: 'core', title: 'Execute: Recursive CTE', description: 'Write a Recursive CTE to traverse a hierarchical category structure.', completed: false, xp: 20 },
      { id: 'd17-port-1', category: 'portfolio', title: 'Consume: SQL Aggregates', sourceUrl: 'https://www.postgresql.org/docs/current/tutorial-agg.html', completed: false, xp: 10 },
      { id: 'd17-port-2', category: 'portfolio', title: 'Execute: Trial Balance API', description: 'Write native SQL in Spring Data to aggregate debits/credits for a Trial Balance.', completed: false, xp: 30 }
    ]
  },
  {
    day: 18,
    tasks: [
      { id: 'd18-dsa-1', category: 'dsa', title: 'Consume: Math & Geometry', sourceUrl: 'https://takeuforward.org/data-structure/maths/', completed: false, xp: 10 },
      { id: 'd18-dsa-2', category: 'dsa', title: 'Execute: Rotate Image', sourceUrl: 'https://leetcode.com/problems/rotate-image/', completed: false, xp: 20 },
      { id: 'd18-lld-1', category: 'lld', title: 'Consume: Elevator System', sourceUrl: 'https://www.geeksforgeeks.org/design-an-elevator-system/', completed: false, xp: 20 },
      { id: 'd18-lld-2', category: 'lld', title: 'Execute: Elevator (Timed)', description: 'Machine Coding (90 mins). Handle direction state and request queues.', completed: false, xp: 50 },
      { id: 'd18-core-1', category: 'core', title: 'Consume: Query Optimization', sourceUrl: 'https://www.postgresql.org/docs/current/sql-explain.html', completed: false, xp: 20 },
      { id: 'd18-core-2', category: 'core', title: 'Execute: EXPLAIN ANALYZE', description: 'Run EXPLAIN ANALYZE on the Trial Balance query to locate sequential scans.', completed: false, xp: 20 },
      { id: 'd18-port-1', category: 'portfolio', title: 'Consume: Postgres Indexes', sourceUrl: 'https://www.postgresqltutorial.com/postgresql-indexes/', completed: false, xp: 10 },
      { id: 'd18-port-2', category: 'portfolio', title: 'Execute: Composite Indexes', description: 'Add composite index on (account_id, transaction_date) to optimize reporting.', completed: false, xp: 30 }
    ]
  },
  {
    day: 19,
    tasks: [
      { id: 'd19-dsa-1', category: 'dsa', title: 'Consume: Bit Manipulation', sourceUrl: 'https://neetcode.io/practice', completed: false, xp: 10 },
      { id: 'd19-dsa-2', category: 'dsa', title: 'Execute: Number of 1 Bits', sourceUrl: 'https://leetcode.com/problems/number-of-1-bits/', completed: false, xp: 20 },
      { id: 'd19-hld-1', category: 'hld', title: 'Consume: Design Twitter', sourceUrl: 'https://github.com/donnemartin/system-design-primer#design-twitter', completed: false, xp: 20 },
      { id: 'd19-hld-2', category: 'hld', title: 'Execute: Fanout Architectures', description: 'Map out the fanout-on-write vs fanout-on-read architecture.', completed: false, xp: 30 },
      { id: 'd19-core-1', category: 'core', title: 'Consume: Angular OnPush', sourceUrl: 'https://angular.dev/best-practices/skipping-subtrees', completed: false, xp: 20 },
      { id: 'd19-core-2', category: 'core', title: 'Execute: OnPush vs Default', description: 'Compare Default vs OnPush. Explain trackBy.', completed: false, xp: 20 },
      { id: 'd19-port-1', category: 'portfolio', title: 'Consume: Angular Signals', sourceUrl: 'https://angular.dev/guide/signals', completed: false, xp: 10 },
      { id: 'd19-port-2', category: 'portfolio', title: 'Execute: Signals Refactor', description: 'Refactor the Angular inventory list to use Signals to prevent UI freezing.', completed: false, xp: 30 }
    ]
  },
  {
    day: 20,
    tasks: [
      { id: 'd20-dsa-1', category: 'dsa', title: 'Consume: Advanced Graphs', sourceUrl: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/', completed: false, xp: 10 },
      { id: 'd20-dsa-2', category: 'dsa', title: 'Execute: Word Ladder (Hard)', sourceUrl: 'https://leetcode.com/problems/word-ladder/', completed: false, xp: 40 },
      { id: 'd20-hld-1', category: 'hld', title: 'Consume: Message Queues', sourceUrl: 'https://www.ibm.com/topics/apache-kafka', completed: false, xp: 20 },
      { id: 'd20-hld-2', category: 'hld', title: 'Execute: Kafka vs RabbitMQ', description: 'Understand Kafka partitions, consumer groups, and RabbitMQ dead letter queues.', completed: false, xp: 30 },
      { id: 'd20-core-1', category: 'core', title: 'Consume: RxJS Memory Leaks', sourceUrl: 'https://rxjs.dev/guide/subscription', completed: false, xp: 20 },
      { id: 'd20-core-2', category: 'core', title: 'Execute: Cleanup Strategies', description: 'Document strategies for cleaning up Subscriptions (takeUntil, AsyncPipe).', completed: false, xp: 20 },
      { id: 'd20-port-1', category: 'portfolio', title: 'Consume: Sonar Rules', sourceUrl: 'https://rules.sonarsource.com/java/', completed: false, xp: 10 },
      { id: 'd20-port-2', category: 'portfolio', title: 'Execute: Code Audit', description: 'Run an audit. Convert manual RxJS subscribes to use the async pipe.', completed: false, xp: 30 }
    ]
  },

  // --- WEEK 4: THE HARD GRIND (Days 21-25) ---
  ...Array.from({ length: 5 }, (_, i) => ({
    day: i + 21,
    tasks: [
      { id: `d${i+21}-dsa-1`, category: 'dsa' as TaskCategory, title: 'Consume: Hard Problems', sourceUrl: 'https://leetcode.com/problemset/all/?difficulty=HARD', completed: false, xp: 10 },
      { id: `d${i+21}-dsa-2`, category: 'dsa' as TaskCategory, title: 'Execute: 2 Hard Problems (DP/Graph/UF)', description: 'Complete 2 Hard level DP, Graph, or Union Find questions daily under 45 mins.', completed: false, xp: 40 },
      { id: `d${i+21}-hld-1`, category: 'hld' as TaskCategory, title: 'Consume: Deep Dives (ByteByteGo)', sourceUrl: 'https://bytebytego.com/', completed: false, xp: 20 },
      { id: `d${i+21}-hld-2`, category: 'hld' as TaskCategory, title: 'Execute: System Design (Uber/WhatsApp)', description: 'Design Uber, WhatsApp, Key-Value Store, Web Crawler. Focus on handling network partitions and bottlenecks.', completed: false, xp: 30 },
      { id: `d${i+21}-core-1`, category: 'core' as TaskCategory, title: 'Consume: N+1 Problem', sourceUrl: 'https://www.baeldung.com/hibernate-n-plus-1', completed: false, xp: 20 },
      { id: `d${i+21}-core-2`, category: 'core' as TaskCategory, title: 'Execute: Fix N+1 Issues', description: 'Fix Hibernate N+1 issues using JOIN FETCH or Entity Graphs. Learn Spring Batch for bulk processing.', completed: false, xp: 20 },
      { id: `d${i+21}-port-1`, category: 'portfolio' as TaskCategory, title: 'Consume: K6 Load Testing', sourceUrl: 'https://k6.io/docs/', completed: false, xp: 10 },
      { id: `d${i+21}-port-2`, category: 'portfolio' as TaskCategory, title: 'Execute: Productionize', description: 'Write K6 scripts to hit the Spring Boot backend with 1000 Virtual Users. Identify bottlenecks. Apply Pessimistic Locks.', completed: false, xp: 30 }
    ]
  })),

  // --- WEEK 5: MOCK ENVIRONMENT & SPEED DRILLS (Days 26-35) ---
  ...Array.from({ length: 10 }, (_, i) => ({
    day: i + 26,
    tasks: [
      { id: `d${i+26}-dsa-1`, category: 'dsa' as TaskCategory, title: 'Consume: Mock Contests', sourceUrl: 'https://leetcode.com/contest/', completed: false, xp: 10 },
      { id: `d${i+26}-dsa-2`, category: 'dsa' as TaskCategory, title: 'Execute: Full Virtual Contest', description: '1 Full Virtual Contest daily. Strict 90-minute limit. No looking at solutions until the timer ends. Focus on raw speed.', completed: false, xp: 50 },
      { id: `d${i+26}-lld-1`, category: 'lld' as TaskCategory, title: 'Consume: Machine Code Trials', sourceUrl: 'https://workat.tech/machine-coding', completed: false, xp: 20 },
      { id: `d${i+26}-lld-2`, category: 'lld' as TaskCategory, title: 'Execute: Timed Coding (90m)', description: 'Code Cache Framework, Git internals, Flash Sale system from scratch. Strict 90 min timers. Zero compiler errors allowed.', completed: false, xp: 50 },
      { id: `d${i+26}-core-1`, category: 'core' as TaskCategory, title: 'Consume: Observability', sourceUrl: 'https://micrometer.io/docs/concepts', completed: false, xp: 20 },
      { id: `d${i+26}-core-2`, category: 'core' as TaskCategory, title: 'Execute: Centralized Logging', description: 'Implement centralized structured logging (SLF4J in JSON format). Inject correlation IDs into MDC.', completed: false, xp: 20 }
    ]
  })),

  // --- WEEK 6: INTERVIEW READINESS & POLISH (Days 36-45) ---
  ...Array.from({ length: 10 }, (_, i) => ({
    day: i + 36,
    tasks: [
      { id: `d${i+36}-dsa-1`, category: 'dsa' as TaskCategory, title: 'Consume: Confidence Runs', sourceUrl: 'https://neetcode.io/practice', completed: false, xp: 10 },
      { id: `d${i+36}-dsa-2`, category: 'dsa' as TaskCategory, title: 'Execute: Re-solve Failed Mediums', description: 'Re-solve 5 previously failed Mediums in under 60 minutes total. Build muscle memory and execution flow.', completed: false, xp: 30 },
      { id: `d${i+36}-prep-1`, category: 'prep' as TaskCategory, title: 'Consume: Pramp Mocks', sourceUrl: 'https://www.pramp.com/#/', completed: false, xp: 10 },
      { id: `d${i+36}-prep-2`, category: 'prep' as TaskCategory, title: 'Execute: Live Mocks', description: '3 Live Peer-to-Peer Mocks per week. Practice verbalizing your thought process while coding.', completed: false, xp: 40 },
      { id: `d${i+36}-prep-3`, category: 'prep' as TaskCategory, title: 'Consume: STAR Method', sourceUrl: 'https://www.theforage.com/blog/basics/star-method', completed: false, xp: 10 },
      { id: `d${i+36}-prep-4`, category: 'prep' as TaskCategory, title: 'Execute: Behavioral Prep', description: 'Map your POS architecture decisions to STAR format. Prepare defense for design choices.', completed: false, xp: 30 },
      { id: `d${i+36}-port-1`, category: 'portfolio' as TaskCategory, title: 'Consume: GitHub Docs', sourceUrl: 'https://docs.github.com/en/get-started/writing-on-github', completed: false, xp: 10 },
      { id: `d${i+36}-port-2`, category: 'portfolio' as TaskCategory, title: 'Execute: Code Freeze & README', description: 'Write an elite README.md. Document the architecture, concurrency strategy, and offline-first data flow. Final GitHub commit.', completed: false, xp: 40 }
    ]
  }))
];
