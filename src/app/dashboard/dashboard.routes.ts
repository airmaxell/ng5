import { Routes } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { CatchersRoutes } from './catchers/catchers.routes';

import { DashboardComponent } from './index';

export const DashboardRoutes: Routes = [
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        ...HomeRoutes,
        ...CatchersRoutes
      ]
    }
];
