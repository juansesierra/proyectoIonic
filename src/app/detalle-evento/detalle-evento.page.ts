import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.page.html',
  styleUrls: ['./detalle-evento.page.scss'],
})
export class DetalleEventoPage implements OnInit {
  evento: string;

  datos;

  constructor(public route: ActivatedRoute, private router: Router) {
    // Comprobamos si viene de inicio
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.evento = this.router.getCurrentNavigation().extras.state.evento;
      }
    });

    // Comprobamos si viene por url o desde el boton atras
    if (!this.evento && this.route.snapshot.paramMap.get('idEvento')) {
      this.evento = this.route.snapshot.paramMap.get('idEvento');
    }

    // Obtenemos los datos del evento
    if (this.evento) {
      const eventos = JSON.parse(localStorage.getItem('eventos'));
      if (eventos) {
        this.datos = eventos.find((element) => element['club'] === this.evento); 
      }
    }

  }

  ngOnInit() {
  }

}
