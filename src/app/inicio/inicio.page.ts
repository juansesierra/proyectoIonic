import { FavoritosPageModule } from './../favoritos/favoritos.module';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  eventos = [];
  clubs = [];
  favs = [];

  datosIniciales = [
    {
      foto: 'poolMarmarela',
      fecha: 'Sábado 11 de Mayo',
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
      foto: 'fiestaConcerto',
      fecha: 'Viernes 10 de Mayo',
      evento: 'Fiesta del semáforo',
      horario: '2:30 - 7:30',
      club: 'Club Concerto',
      artistas : ['Nicky Jam', 'Anuel'],
      descripcion: 'Esta semana tendremos en Club Concerto dos de los artistas más importantes del género urbano',
      politica: '+18',
      vestimenta: 'casual',
      comentarios: []
    },
    {
      foto: 'fiestaMagma',
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
      foto: 'fiestaHavana',
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
    }
  ];
  datosInicialesClubs = [
    {
      foto: 'Marmarela',
      club: 'Marmarela',
      localizacion: 'Alicante',
      likes: '50k',
      descripcion: 'Marmarela es un espacio multidisciplinar donde Restauración, Cocktails, Copas y una cuidada programación musical son sus grandes atractivos. Tenemos conciertos y actuaciones de djs en un marco incomparable, así como acciones escenográficas de todo tipo. Marmarela ofrece un contenido diferente para cada día y para todos los gustos, contando siempre con artistas de primer nivel.',
      generosMusicales : [
        {
          tipo:'House'
        },
        {
          tipo:'Electronica'
        },
        {
          tipo:'Dance'
        }
      ]
    },
    {
      foto: 'Magma Club',
      club: 'Magma Club',
      localizacion: 'Alicante',
      likes: '40k',
      descripcion: 'Contando con una programación inigualable y un ambiente excepcional, somos el lugar donde te haremos disfrutar como nunca. En un entorno privilegiado, podrás disfrutar de la mejor música sin que tengas ningún tipo de carencia. Servicio de cachimbas, restauración… todo al alcance de tu mano.',
      generosMusicales : [
        {
          tipo:'House'
        },
        {
          tipo:'Trap'
        },
        {
          tipo:'Dance'
        }
      ]
    },
    {
      foto: 'Marearock Bar',
      club: 'Marearock Bar',
      localizacion: 'Alicante',
      likes: '30k',
      descripcion: 'Todo el Rock, Punk, Metal,.. Nacional e Internacional!! Mucha fiesta, buenos Djs y buenos precios!!!',
      generosMusicales : [
        {
          tipo:'Rock'
        },
        {
          tipo:'Punk'
        },
        {
          tipo:'Metal'
        },
        {
          tipo:'Ska'
        }
      ]
    },
    {
      foto: 'Club Concerto',
      club: 'Club Concerto',
      localizacion: 'Alicante',
      likes: '30k',
      descripcion: 'Te gustaría sentirte cada noche en las mejores discotecas de Nueva York, Miami o París? ¿Te atraería un lugar donde cada noche es única y donde puedes disfrutar espectáculos únicos? Grupo Concerto-Havana lo pone a tu disposición. En Club_Concerto ponemos a tu disposición todo eso y más. Una enrome pista, un espacio VIP espectacular, un Priveé solo para los elegidos, un funcional escenario para performances con videowall de última generación, la mejor iluminación con efectos nunca vistos.',
       generosMusicales : [
        {
          tipo:'House'
        },
        {
          tipo:'Reggeaton'
        },
      ]
    },
    {
      foto: 'Havanna Castaños',
      club: 'Havanna Castaños',
      localizacion: 'Alicante',
      likes: '30k',
      descripcion: 'Havana Castaños es un lugar único, por su gran barra central alrededor de la cual ocurre todo y la posibilidad de crear diferentes ambientes dentro de un mismo espacio. Sin olvidar que lo que lo hace realmente inolvidable es la gente, el ambiente y la felicidad que lo impregna todo cada fin de semana, con un lleno total.',
      generosMusicales : [
        {
          tipo:'House'
        },
        {
          tipo:'Reggeaton'
        },
      ]
    }
  ];
  favoritos = ['Marmarela', 'Magma Club', 'Marearock Bar']

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

  goToClub(club) {
    const navigationExtras: NavigationExtras = {
      state: {
        club : club
      }
    };

    console.log(club);
     this.router.navigate(['detalles-club'], navigationExtras);
  }

  ngOnInit() {

    if (!localStorage.getItem('eventos')) {
      localStorage.setItem('eventos',  JSON.stringify(this.datosIniciales));
      this.eventos = this.datosIniciales;
      
    } else {
      this.eventos = JSON.parse( localStorage.getItem('eventos') );
    }

    if (!localStorage.getItem('clubs')) {
      localStorage.setItem('clubs',  JSON.stringify(this.datosInicialesClubs));
      this.clubs = this.datosInicialesClubs;
      
    } else {
      this.clubs = JSON.parse( localStorage.getItem('clubs') );
    }

    if (!localStorage.getItem('favoritos')) {
      localStorage.setItem('favoritos',  JSON.stringify(this.favoritos));
      this.favs = this.favoritos;
      
    } else {
      this.favs = JSON.parse( localStorage.getItem('favoritos') );
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
