import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaculdadeRoutinhModule } from './faculdade.routing';
import { FaculdadeCadastroComponent } from './faculdade-cadastro/faculdade-cadastro.component';
import { FaculdadeListaComponent } from './faculdade-lista/faculdade-lista.component';

@NgModule({
  imports: [
    CommonModule,
    FaculdadeRoutinhModule
  ],
  declarations: [
    FaculdadeCadastroComponent,
    FaculdadeListaComponent
  ]
})
export class FaculdadeModule { }
