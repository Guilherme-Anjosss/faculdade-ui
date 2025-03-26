import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiciplinaRoutinhModule } from './diciplina.routing';
import { DiciplinaCadastroComponent } from './diciplina-cadastro/diciplina-cadastro.component';
import { DiciplinaListaComponent } from './diciplina-lista/diciplina-lista.component';
import { PrimengModule } from 'src/app/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    DiciplinaRoutinhModule,
    PrimengModule
  ],
  declarations: [
    DiciplinaCadastroComponent,
    DiciplinaListaComponent,
  ]
})
export class DiciplinaModule { }
