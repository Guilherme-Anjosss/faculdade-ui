import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplinaListaComponent } from './disciplina-lista/disciplina-lista.component';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';

const routes: Routes = [
  { path: '', component: DisciplinaListaComponent },
  { path: 'novo', component: DisciplinaCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
