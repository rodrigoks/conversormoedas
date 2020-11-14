import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components/conversor.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConversorComponent
  ],
  exports: [
    ConversorComponent
  ]
})
export class ConversorModule { }
