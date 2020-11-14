import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ConversorComponent } from './components/conversor.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ConversorComponent
  ],
  exports: [
    ConversorComponent
  ]
})
export class ConversorModule { }
