import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'favoritos', loadChildren: './favoritos/favoritos.module#FavoritosPageModule' },
  { path: 'detalle-evento', loadChildren: './detalle-evento/detalle-evento.module#DetalleEventoPageModule' },
  { path: 'detalle-evento/:idEvento', loadChildren: './detalle-evento/detalle-evento.module#DetalleEventoPageModule' },
  { path: 'comentarios/:idEvento', loadChildren: './comentarios/comentarios.module#ComentariosPageModule' },
  { path: 'detalles-club', loadChildren: './detalles-club/detalles-club.module#DetallesClubPageModule' },
  { path: 'detalles-club/:idClub', loadChildren: './detalles-club/detalles-club.module#DetallesClubPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'entradas', loadChildren: './entradas/entradas.module#EntradasPageModule' },
  { path: 'metodo-pago', loadChildren: './metodo-pago/metodo-pago.module#MetodoPagoPageModule' },
  { path: 'tarjeta-credito', loadChildren: './tarjeta-credito/tarjeta-credito.module#TarjetaCreditoPageModule' },
  { path: 'compra', loadChildren: './compra/compra.module#CompraPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

