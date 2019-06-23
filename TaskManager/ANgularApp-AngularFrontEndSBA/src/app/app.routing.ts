import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TaskmanagerComponent} from './taskmanager/taskmanager.component';
import {AddtaskComponent} from './addtask/addtask.component';
import {AdduserComponent} from './adduser/adduser.component';
import {AddprojectComponent} from './addproject/addproject.component';
import {ViewusersComponent} from './viewusers/viewusers.component';
import {ViewprojectsComponent} from './viewprojects/viewprojects.component';
import {AppComponent} from './app.component';
 
const appRoutes : Routes =
  [
    {
      path: '',
      component: TaskmanagerComponent
    },
    {
      path: 'view',
      component: TaskmanagerComponent
    },
    {
      path: 'viewuser',
      component: ViewusersComponent
    },
    {
      path: 'viewproject',
      component: ViewprojectsComponent
    },
    {
      path: 'add',
      component: AddtaskComponent,
    },
    {
      path: 'adduser',
      component: AdduserComponent,
    },
    {
      path: 'edit',
      component: AddtaskComponent,
 
    },
    {
        path: 'edit/:id',
        component: AddtaskComponent,
    },
    {
      path: 'edituser',
      component: AdduserComponent,
 
    },
    {
        path: 'edituser/:id',
        component: AdduserComponent,
    },
    {
      path: 'editproject',
      component: AddprojectComponent,
 
    },
    {
        path: 'editproject/:id',
        component: AddprojectComponent,
    },
    {
      path: 'addproject',
      component: AddprojectComponent,
    },
    {
      path: '**',
      component: TaskmanagerComponent
    }
  ];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);