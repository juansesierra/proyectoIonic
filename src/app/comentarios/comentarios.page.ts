import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {
  evento: string;
  
  comentarios = [
    {
      usuario: 'Juan',
      comentario: 'Después de estar esperando todo el año, por fin se abre la terraza!'
    },
    {
      usuario: 'Dani',
      comentario: 'Se nota que ya se esta acercando la temporada de verano, ansioso por ir!'
    },
    {
      usuario: 'Juanse',
      comentario: 'Que ganas de ir!, ya estoy apuntado en lista y contando los días para celebrar'
    }
  ];

  constructor(public route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.evento = this.route.snapshot.paramMap.get('idEvento');
  }

}
