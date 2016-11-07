import { Component, OnInit } from '@angular/core';
import { NumerosPrimosService } from '../numeros-primos.service';

@Component({
  selector: 'app-numeros-primos-con-servicio',
  templateUrl: './numeros-primos-con-servicio.component.html',
  styleUrls: ['./numeros-primos-con-servicio.component.css'],
  providers: [NumerosPrimosService]
})
export class NumerosPrimosConServicioComponent implements OnInit {


  mostrarInformacion: boolean = false;
  constructor(private numerosPrimosService: NumerosPrimosService ) { 
    
  }


  colorEnDistintosEstados(numero: number):string{
      if(this.numerosPrimosService.esPrimo(numero)){
        return "red";
      } else if (this.numerosPrimosService.esMultiploDeTres(numero)){
        return "orange";
      } else{
        return "blue"; 
      }
  }
  ngOnInit() {
  }
  cambiarEstadoInformacion():void{
    this.mostrarInformacion = !this.mostrarInformacion;
  }

}
