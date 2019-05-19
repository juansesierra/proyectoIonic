import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favoritos:string [] = []
  constructor(private router: Router) { 
    const favs = JSON.parse(localStorage.getItem('favoritos'));
    this.favoritos = favs;
    console.log(this.favoritos);
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
  }

}
