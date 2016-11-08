import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros-primos-leyenda',
  templateUrl: './numeros-primos-leyenda.component.html',
  styleUrls: ['./numeros-primos-leyenda.component.css']
})
export class NumerosPrimosLeyendaComponent implements OnInit {

  mostrarInformacion: boolean = false;
  constructor() { }
  cambiarEstadoInformacion():void{
    this.mostrarInformacion = !this.mostrarInformacion;
  }
  ngOnInit() {
  }

}
