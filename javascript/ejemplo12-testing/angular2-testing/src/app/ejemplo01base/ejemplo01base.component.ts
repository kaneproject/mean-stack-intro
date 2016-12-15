import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo01base',
  templateUrl: './ejemplo01base.component.html',
  styleUrls: ['./ejemplo01base.component.css']
})
export class Ejemplo01baseComponent implements OnInit {
  public name: string = "Ruben";
 public elementos: Array<number> = [2,3,6,33,3,5,2,5,2,24,23,451,2,8];
  constructor() { }

  ngOnInit() {
  }

  metodoDeComponent(): string{
    return "Hola caracola"
  }

}
