import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-club',
  templateUrl: './detalles-club.page.html',
  styleUrls: ['./detalles-club.page.scss'],
})
export class DetallesClubPage implements OnInit {

  club: string;
  info: any;
  events: any;
  favs: any;
  like = false;

  constructor(public route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.club = this.router.getCurrentNavigation().extras.state.club;
      }
    });
    const clubs = JSON.parse(localStorage.getItem('clubs'));
    const eventos = JSON.parse(localStorage.getItem('eventos'));
    
    
    if (clubs) {
      this.info = clubs.find((element) => element['club'] === this.club);
      this.events = eventos.find((element) => element['club'] === this.club);
    }

    console.log(this.info);
  }

  anyadir(){
    const favoritos = JSON.parse(localStorage.getItem('favoritos'));
    this.favs = favoritos;
    var index = favoritos.indexOf(this.events.club);

    // lo quitamos
    if (index!=-1) {
      this.like=false;
      this.favs.splice(index,1);
    }
    // lo añadimos
    else {
      this.like=true;
      this.favs.push(this.events.club);
    }
    
    localStorage.setItem('favoritos',  JSON.stringify(this.favs));
  }

  

  ngOnInit() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos'));
    var index = favoritos.indexOf(this.events.club);

    // ponemos corazon rojo
    if (index!=-1) {
      this.like=true;
    }
  }

}
