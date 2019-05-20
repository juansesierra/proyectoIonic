import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.page.html',
  styleUrls: ['./mis-eventos.page.scss'],
})
export class MisEventosPage implements OnInit {

  eventos: any
  evento: any
  like = false;
  constructor(private router :Router) { 

    const misEvents = JSON.parse( localStorage.getItem('misEventos'));
    this.eventos = misEvents;
  }

  goToEvento(evento) {
    const navigationExtras: NavigationExtras = {
      state: {
        evento : evento
      }
    };

    console.log(evento);
     this.router.navigate(['detalle-evento'], navigationExtras);
  }

  

  ngOnInit() {
    const misEvents = JSON.parse( localStorage.getItem('misEventos'));
    this.eventos = misEvents;
    console.log(this.eventos);
  }

  ionViewWillEnter() {
    const misEvents = JSON.parse( localStorage.getItem('misEventos'));
    this.eventos = misEvents;
    console.log(this.eventos);
  }

}
