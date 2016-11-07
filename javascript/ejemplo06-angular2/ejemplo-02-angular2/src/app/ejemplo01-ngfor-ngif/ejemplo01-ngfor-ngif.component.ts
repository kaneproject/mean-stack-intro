import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo01-ngfor-ngif',
  templateUrl: './ejemplo01-ngfor-ngif.component.html',
  styleUrls: ['./ejemplo01-ngfor-ngif.component.css']
})
export class Ejemplo01NgforNgifComponent implements OnInit {

  mostrarInformacion :boolean;
  variableDeInstancia :string;
  tomaArray :number[] = [1,3,5,4,2,6,7,17]; 
  constructor() { 
    this.variableDeInstancia = "Renderizado componente ngif ngfor!"
    this.mostrarInformacion = false;
  }
  colorEnPares(numero: number):string{
      if((numero % 2) == 0){
        return "blue";
      }
      return "red";
  }
  ngOnInit() {
  }
  cambiarEstadoInformacion():void{
    this.mostrarInformacion = !this.mostrarInformacion;
  }
}
