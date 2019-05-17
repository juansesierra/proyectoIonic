import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {
  evento: string;
  
  comentarios;

  constructor(public route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     // Comprobamos si viene por url o desde el boton atras
     if (!this.evento && this.route.snapshot.paramMap.get('idEvento')) {
      this.evento = this.route.snapshot.paramMap.get('idEvento');
    }

    // Obtenemos los datos del evento
    if (this.evento) {
      const eventos = JSON.parse(localStorage.getItem('eventos'));
      if (eventos) {
        this.comentarios = eventos.find((element) => element['club'] === this.evento).comentarios; 
      }

      console.log(this.comentarios);
    }
    this.evento = this.route.snapshot.paramMap.get('idEvento');
  }

}
