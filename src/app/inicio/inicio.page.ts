import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  eventos = [];

  datosIniciales = [
    {
      foto: 'Marmarela',
      fecha: 'Viernes 10 de Mayo',
      evento: 'THE SHOW EGIPTO',
      horario: '23:59 - 7:30',
      club: 'Marmarela',
      artistas : ['Steve Aoki', 'Afrojack', 'David Guetta'],
      descripcion: 'Esta semana contaremos con una sala más grande ya que realizaremos la apertura de nuestro espacio Main Terrace. ',
      politica: '+20',
      vestimenta: 'arreglada',
      comentarios : [
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
      ]
    },
    {
      foto: 'Club Concerto',
      fecha: 'Viernes 10 de Mayo',
      evento: 'Urban Night',
      horario: '2:30 - 7:30',
      club: 'Club Concerto',
      artistas : ['Nicky Jam', 'Anuel'],
      descripcion: 'Esta semana tendremos en Club Concerto dos de los artistas más importantes del género urbano',
      politica: '+18',
      vestimenta: 'casual',
      comentarios: []
    },
    {
      foto: 'Magma Club',
      fecha: 'Viernes 10 de Mayo',
      evento: 'Capsula del tiempo',
      horario: '23:59 - 7:30',
      club: 'Magma Club',
      artistas : ['Daddy Yankee', 'Don Omar', 'Tego Calderon'],
      descripcion: 'Esta semana daremos un viaje por el pasado junto a tres de los artistas que ' +
      'impulsaron el género urbano. ¿Te lo vas a perder?',
      politica: '+18',
      vestimenta: 'casual',
      comentarios: []
    },
    {
      foto: 'Marearock Bar',
      fecha: 'Sábado 11 de Mayo',
      evento: 'Fiesta Rock And Roll',
      horario: '21:59 - 4:30',
      club: 'Marearock Bar',
      artistas : ['Bon Jovi', 'U2'],
      descripcion: 'Esta semana en Marea Rock no te puedes perder nuestra fiesta de Rock',
      politica: '+21',
      vestimenta: 'casual',
      comentarios: []
    },
    {
      foto: 'Havana Castaños',
      fecha: 'Sábado 11 de Mayo',
      evento: 'Tardeo del Sábado',
      horario: '16:00 - 2:30',
      club: 'Havana Castaños',
      artistas : ['Ozuna', 'Romeo Santos'],
      descripcion: 'Como todos los Sábados, no te puedes perder tu cita en el mejor tardeo de la ciudad. Además contaremos con '+
      'la animación de artistas de fama internacinal!',
      politica: '+21',
      vestimenta: 'arreglada',
      comentarios: []
    }
  ];

  constructor(private router: Router) {

  }

  goTo(evento) {
    const navigationExtras: NavigationExtras = {
      state: {
        evento : evento
      }
    };

    console.log(evento);
     this.router.navigate(['detalle-evento'], navigationExtras);
  }

  ngOnInit() {

    if (!localStorage.getItem('eventos')) {
      localStorage.setItem('eventos',  JSON.stringify(this.datosIniciales));
      this.eventos = this.datosIniciales;
      
    } else {
      this.eventos = JSON.parse( localStorage.getItem('eventos') );
    }

    /*
    const self  = this;
    setTimeout(function() {
      self.eventos.push( {
        'club' : self.imagenes[0],
        'fecha' : self.fechas[0]
      });
    }, 5000);*/
  }

}
