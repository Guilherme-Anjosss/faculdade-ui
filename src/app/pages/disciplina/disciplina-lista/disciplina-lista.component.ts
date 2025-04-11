import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';
import { Disciplina } from '../../core/models/disciplina.model';

@Component({
  selector: 'app-disciplina-lista',
  templateUrl: './disciplina-lista.component.html'
})
export class DisciplinaListaComponent implements OnInit {
  disciplinas: Disciplina[] = [];

  disciplinaDialog: boolean = false;
  novaDisciplina: Disciplina = new Disciplina();

  statusOptions = [
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false }
  ];

  constructor(private disciplinaService: DisciplinaService) {}

  ngOnInit(): void {
    this.carregarDisciplinas();
  }

  carregarDisciplinas(): void {
    this.disciplinas = this.disciplinaService.listar();
  }

  abrirDialog(): void {
    this.novaDisciplina = new Disciplina();
    this.disciplinaDialog = true;
  }

  salvarDisciplina(): void {
    this.disciplinaService.adicionar(this.novaDisciplina).then(() => {
      this.carregarDisciplinas();
      this.disciplinaDialog = false;
    });
  }
}
