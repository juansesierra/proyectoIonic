import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.page.html',
  styleUrls: ['./detalle-evento.page.scss'],
})
export class DetalleEventoPage implements OnInit {
  evento : string;

  datos = {
    foto: 'Marmarela',
    fecha: 'Viernes 10 de Mayo',
    evento: 'THE SHOW EGIPTO',
    horario: '23:59 - 7:30',
    club: 'Marmarela',
    artistas : ['Steve Aoki', 'Afrojack', 'David Guetta'],
    descripcion: 'Esta semana contaremos con una sala más grande ya que realizaremos la apertura de nuestro espacio Main Terrace. ',
    politica: '+20',
    vestimenta: 'arreglada'
  };

  constructor(public route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => { 
      if (this.router.getCurrentNavigation().extras.state) {
        this.evento = this.router.getCurrentNavigation().extras.state.evento;
      }
    });
   }

  ngOnInit() {
  }

}
