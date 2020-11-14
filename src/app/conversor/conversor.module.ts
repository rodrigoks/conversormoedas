import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NumeroDirective } from './directives/numero.directive';
import { DataBrPipe } from './pipes/data-br.pipe';

import { ConversorComponent } from './components/conversor.component';
import { ModalCotacaoComponent } from './utils/modal-cotacao.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe
  ],
  exports: [
    ConversorComponent
  ]
})
export class ConversorModule { }
