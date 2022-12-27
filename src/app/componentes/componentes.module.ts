import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonesComponent } from './botones/botones.component';
import { PantallaComponent } from './pantalla/pantalla.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BotonesComponent,
    PantallaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BotonesComponent,
    PantallaComponent
  ]
})
export class ComponentesModule { }
