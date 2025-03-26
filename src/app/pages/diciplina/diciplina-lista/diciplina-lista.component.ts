import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diciplina-lista',
  templateUrl: './diciplina-lista.component.html',
  styleUrls: ['./diciplina-lista.component.css']
})
export class DiciplinaListaComponent implements OnInit {
    diciplinas = []
  constructor() { }

  ngOnInit() {
  }

}
