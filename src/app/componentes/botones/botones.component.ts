import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  @Input() numBotones1!:any;
  @Input() numBotones2!:any;

  sum:any;
  res:any;
  divi:any;
  mult:any;
  respuesta:any;

  @Output() agregarRespuesta = new EventEmitter();

  sumar(){
    this.sum = this.numBotones1 + this.numBotones2;
    this.respuesta = "La suma de " + this.numBotones1 + " y " + this.numBotones2 + " es " + this.sum;
    this.agregarRespuesta.emit(this.respuesta);
  }
  restar(){
    this.res = this.numBotones1 - this.numBotones2;
    this.respuesta = "La resta de " + this.numBotones1 + " y " + this.numBotones2 + " es " + this.res;
    this.agregarRespuesta.emit(this.respuesta);
  }
  dividir(){
    this.divi = this.numBotones1 / this.numBotones2;
    this.respuesta = "La division de " + this.numBotones1 + " entre " + this.numBotones2 + " es " + this.divi;
    this.agregarRespuesta.emit(this.respuesta);
  }
  multiplicar(){
    this.mult = this.numBotones1 * this.numBotones2;
    this.respuesta = "La multiplicacion de " + this.numBotones1 + " y " + this.numBotones2 + " es " + this.mult;
    this.agregarRespuesta.emit(this.respuesta);
  }
  operaciones(){
    alert('Aquí deberían salir los resultados de las 4 operaciones, pero estamos trabajndo en eso, por ahora solo funciona como dividir.')
    this.sumar();
    this.restar();
    this.multiplicar();
    this.dividir();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
