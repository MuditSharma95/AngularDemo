import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    FilterPipe
  ]
})
export class SharedModule { }
