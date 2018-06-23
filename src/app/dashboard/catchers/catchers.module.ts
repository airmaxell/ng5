import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatchersComponent } from './catchers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CatchersComponent],
  exports: [CatchersComponent]
})
export class CatchersModule { }
