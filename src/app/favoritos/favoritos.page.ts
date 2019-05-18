import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  readonly favoritos:string [] = ['Marmarela','Magma Club','Marearock Bar']
  constructor(private router: Router) { }

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
