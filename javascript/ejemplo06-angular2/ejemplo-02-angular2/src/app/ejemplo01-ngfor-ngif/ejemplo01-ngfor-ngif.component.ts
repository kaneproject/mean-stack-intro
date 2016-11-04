import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo01-ngfor-ngif',
  templateUrl: './ejemplo01-ngfor-ngif.component.html',
  styleUrls: ['./ejemplo01-ngfor-ngif.component.css']
})
export class Ejemplo01NgforNgifComponent implements OnInit {

  variableDeInstancia :string;
  tomaArray :number[] = [1,3,5,4,2,6,7,17]; 
  constructor() { 
    this.variableDeInstancia = "Renderizado componente ngif ngfor!"
  }

  ngOnInit() {
  }

}
