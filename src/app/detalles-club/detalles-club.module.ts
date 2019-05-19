import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetallesClubPage } from './detalles-club.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesClubPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetallesClubPage]
})
export class DetallesClubPageModule {}
