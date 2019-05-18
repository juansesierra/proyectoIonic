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
    console.log(this.favs)
    this.favs.push(this.events.club);
    console.log(this.favs)
    localStorage.setItem('favoritos',  JSON.stringify(this.favs));

  }

  ngOnInit() {
  }

}
