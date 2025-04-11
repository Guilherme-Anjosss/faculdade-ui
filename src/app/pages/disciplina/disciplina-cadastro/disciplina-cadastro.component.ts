import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DisciplinaService } from '../disciplina.service';
import { Disciplina } from '../../core/models/disciplina.model';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html'
})
export class DisciplinaCadastroComponent {
  disciplina = new Disciplina();

  statusOptions = [
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false }
  ];

  constructor(
    private disciplinaService: DisciplinaService,
    private router: Router
  ) {}

  cadastroDisciplina(form: NgForm) {
    if (form.valid) {
      this.disciplinaService.adicionar(this.disciplina).then(() => {
        alert('Disciplina cadastrada com sucesso!');
        this.router.navigate(['/disciplinas']);
      });
      form.resetForm(new Disciplina());
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }
}
