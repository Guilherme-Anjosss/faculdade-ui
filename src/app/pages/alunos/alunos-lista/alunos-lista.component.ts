// import { Component, OnInit } from '@angular/core';
// import { AlunoService } from '../alunos.service';

// interface Aluno {
//   id: number;
//   nome: string;
//   idade: number;
//   curso: string;
// }

// @Component({
//   selector: 'app-alunos-lista',
//   templateUrl: './alunos-lista.component.html',
//   styleUrls: ['./alunos-lista.component.css']
// })
// export class AlunosListaComponent implements OnInit {
//   alunos: Aluno[] = [];

//   constructor(private alunoService: AlunoService) {}

//   ngOnInit(): void {
//     this.alunos = this.alunoService.getAlunos();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../alunos.service';

interface Aluno {
  id: number;
  nome: string;
  idade: number;
  curso: string;
}

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css']
})
export class AlunosListaComponent implements OnInit {
  alunos: Aluno[] = [];

  // VARIÁVEIS DO DIALOG
  alunoDialog: boolean = false;

  novoAluno: Aluno = {
    id: 0,
    nome: '',
    idade: null!,
    curso: ''
  };

  constructor(private alunosService: AlunoService) {}

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }

  abrirDialog(): void {
    this.alunoDialog = true;
  }

  salvarAluno(): void {
    this.alunosService.adicionarAluno({ ...this.novoAluno });
    this.alunos = this.alunosService.getAlunos();
    this.novoAluno = { id: 0, nome: '', idade: null!, curso: '' };
    this.alunoDialog = false;
  }
}
