import { Injectable } from '@angular/core';
import { Disciplina } from '../core/models/disciplina.model';
import { DISCIPLINAS_MOCK } from '../disciplina/mock-disciplinas';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private disciplinas: Disciplina[] = [...DISCIPLINAS_MOCK];

  constructor() {}

  listar(): Disciplina[] {
    return this.disciplinas;
  }

  adicionar(disciplina: Disciplina): Promise<void> {
    return new Promise((resolve) => {
      const novoId = this.disciplinas.length > 0 ? Math.max(...this.disciplinas.map(d => d.id || 0)) + 1 : 1;
      disciplina.id = novoId;
      disciplina.datacriacao = new Date();
      disciplina.usucriacao = 'admin';
      this.disciplinas.push(disciplina);
      resolve();
    });
  }

  editar(disciplina: Disciplina): Promise<void> {
    return new Promise((resolve, reject) => {
      const index = this.disciplinas.findIndex(d => d.id === disciplina.id);
      if (index !== -1) {
        disciplina.dataalteracao = new Date();
        disciplina.usualteracao = 'admin';
        this.disciplinas[index] = disciplina;
        resolve();
      } else {
        reject('Disciplina não encontrada');
      }
    });
  }

  remover(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const index = this.disciplinas.findIndex(d => d.id === id);
      if (index !== -1) {
        this.disciplinas.splice(index, 1);
        resolve();
      } else {
        reject('Disciplina não encontrada');
      }
    });
  }

  getById(id: number): Disciplina | undefined {
    return this.disciplinas.find(d => d.id === id);
  }
}
