import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinaRoutinhModule } from './disciplina.routing';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import { DisciplinaListaComponent } from './disciplina-lista/disciplina-lista.component';
import { PrimengModule } from 'src/app/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    DisciplinaRoutinhModule,
    PrimengModule
  ],
  declarations: [
    DisciplinaCadastroComponent,
    DisciplinaListaComponent,
  ],
  providers: []
})
export class DisciplinaModule { }
