import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

// const routes: Routes = [
// {
//   path: 'disciplina',
//   loadChildren: () =>
//     import('./pages/disciplina/disciplina.module').then((m) => m.DisciplinaModule)
// }
// ];


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'alunos',
        loadChildren: () =>
          import('./pages/alunos/alunos.module').then(m => m.AlunosModule),
      },
      {
        path: 'disciplinas',
        loadChildren: () =>
          import('./pages/disciplina/disciplina.module').then(m => m.DisciplinaModule),
      },
      { path: '', redirectTo: 'alunos', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
