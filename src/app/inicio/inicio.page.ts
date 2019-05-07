import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  readonly eventos:string [] = ['Marmarela','Club Concerto','Magma Club','Marearock Bar','Havana']
  constructor() { }

  ngOnInit() {
  }

}
