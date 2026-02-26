import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ScheduleComponent } from './features/schedule/schedule.component';
import { TasksComponent } from './features/tasks/tasks.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];
