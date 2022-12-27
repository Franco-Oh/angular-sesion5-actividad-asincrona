import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonesComponent } from './botones/botones.component';
import { PantallaComponent } from './pantalla/pantalla.component';



@NgModule({
  declarations: [
    BotonesComponent,
    PantallaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BotonesComponent,
    PantallaComponent
  ]
})
export class ComponentesModule { }
