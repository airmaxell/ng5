import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap';

import { HomeModule } from './home/home.module';
import { CatchersModule } from './catchers/catchers.module';
import { DashboardComponent } from './dashboard.component';
import { TopnavComponent } from '../shared/topnav/topnav.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule.forRoot(),
    HomeModule,
    CatchersModule
  ],
  declarations: [DashboardComponent, TopnavComponent, SidebarComponent],
  exports: [DashboardComponent, TopnavComponent, SidebarComponent]
})
export class DashboardModule { }
