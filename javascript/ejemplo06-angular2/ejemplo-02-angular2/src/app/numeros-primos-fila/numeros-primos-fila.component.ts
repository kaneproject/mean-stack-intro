import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros-primos-fila',
  templateUrl: './numeros-primos-fila.component.html',
  styleUrls: ['./numeros-primos-fila.component.css'],
  inputs:['numero']
})
export class NumerosPrimosFilaComponent implements OnInit {

  private numero: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
