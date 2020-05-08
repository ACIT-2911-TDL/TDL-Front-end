import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './app.main';
import { DoneTasksComponent } from './app.doneTasks';
import { NewTaskComponent } from './app.newTask';
import { RegisterComponent } from './app.register';


const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'done', component: DoneTasksComponent},
  {path: 'new', component: NewTaskComponent},
  {path: "register", component: RegisterComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
