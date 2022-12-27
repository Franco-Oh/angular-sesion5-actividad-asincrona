import { Component, EventEmitter, Input, Output, OnInit, } from '@angular/core';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.css']
})
export class PantallaComponent implements OnInit {

  numPantalla1 = 0;
  numPantalla2 = 0;
  operacion:any;

  reseteado(){
    this.operacion = '';
    this.numPantalla1 = 0;
    this.numPantalla2 = 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
