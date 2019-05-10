import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  readonly imagenes: string [] = ['Marmarela', 'Club Concerto', 'Magma Club', 'Marearock Bar', 'Havana Castaños'];
  readonly fechas: string [] = ['Viernes 10', 'Sabado 11'];
   
  eventos = [];


  constructor() {
   }

  ngOnInit() {
    for (let index = 0; index < this.imagenes.length; index++) {
      let fecha;

      // asignamos la primera mitad una fecha y la otra mitad la otra
      index < (this.imagenes.length / 2) ? fecha = 0 : fecha = 1;

      this.eventos[index] =  {
        'club' : this.imagenes[index],
        'fecha' : this.fechas[fecha]
      };
    }
  }

}
