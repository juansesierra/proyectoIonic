import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.page.html',
  styleUrls: ['./detalle-evento.page.scss'],
})
export class DetalleEventoPage implements OnInit {
  evento: string;
  eventos: any
  like = false;
  datos;

  constructor(public route: ActivatedRoute, private router: Router, private alertController: AlertController) {
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

      console.log(this.datos);
    }

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Compartir',
      message: 'Muchas gracias por el apoyo!',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  goToClub(club) {
    const navigationExtras: NavigationExtras = {
      state: {
        club : club
      }
    };

     this.router.navigate(['detalles-club'], navigationExtras);
  }

  apuntarse(evento)
  {
    const misEvents = JSON.parse( localStorage.getItem('misEventos'));
    this.eventos = misEvents;
    var index = this.deepIndexOf(misEvents, this.datos);

    console.log(index);

    // lo quitamos
    if (index!=-1) {
      this.like=false;
      this.eventos.splice(index,1);
    }
    // lo añadimos
    else {
      this.like=true;
      this.eventos.push(this.datos);
    }
    localStorage.setItem('misEventos',  JSON.stringify(this.eventos));

    this.router.navigateByUrl('tabs/mis-eventos');
  }

  deepIndexOf(arr, obj) {
    return arr.findIndex(function (cur) {
        return obj['evento'] === cur['evento'];
    });
  }

  ngOnInit() {
  }

}
