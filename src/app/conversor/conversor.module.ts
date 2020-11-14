import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components/conversor.component';
import { NumeroDirective } from './directives/numero.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    ConversorComponent,
    NumeroDirective
  ],
  exports: [
    ConversorComponent
  ]
})
export class ConversorModule { }
