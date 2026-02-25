import { Injectable, inject } from '@angular/core';
import { CURRICULUM, Task, TaskCategory } from '../models/curriculum.model';
import { SprintStore } from '../store/sprint.store';
import { BlockType } from '../models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private store = inject(SprintStore);

  getTasksForDay(day: number): Task[] {
    const dayCurriculum = CURRICULUM.find(c => c.day === day);
    return dayCurriculum ? dayCurriculum.tasks : [];
  }

  getTasksForBlock(blockType: BlockType, day: number): Task[] {
    const tasks = this.getTasksForDay(day);
    if (!tasks.length) return [];

    switch (blockType) {
      case 'consume':
        // Show DSA and Core tasks (theory)
        return tasks.filter(t => t.category === 'dsa' || t.category === 'core');
      case 'execute':
        // Show DSA tasks (practice)
        return tasks.filter(t => t.category === 'dsa');
      case 'lld':
        return tasks.filter(t => t.category === 'lld');
      case 'deep-tech':
        return tasks.filter(t => t.category === 'core');
      case 'portfolio':
        return tasks.filter(t => t.category === 'portfolio');
      default:
        return [];
    }
  }
}
