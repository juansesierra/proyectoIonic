import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.page.html',
  styleUrls: ['./clubs.page.scss'],
})
export class ClubsPage implements OnInit {

  clubs = []
  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  goToClub(club) {
    const navigationExtras: NavigationExtras = {
      state: {
        club : club
      }
    };

     this.router.navigate(['detalles-club'], navigationExtras);
  }

  ionViewWillEnter() {
    this.clubs = JSON.parse(localStorage.getItem('clubs'));

    console.log(this.clubs);
  }
}
