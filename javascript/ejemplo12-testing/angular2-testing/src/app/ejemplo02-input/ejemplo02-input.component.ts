import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejemplo02-input',
  templateUrl: './ejemplo02-input.component.html',
  styleUrls: ['./ejemplo02-input.component.css']
})
export class Ejemplo02InputComponent implements OnInit {

  @Input() public clientes: Array<string> = [];
  constructor() { }

  ngOnInit() {
  }

}
