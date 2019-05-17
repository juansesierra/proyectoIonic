import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'favoritos', loadChildren: './favoritos/favoritos.module#FavoritosPageModule' },
  { path: 'detalle-evento', loadChildren: './detalle-evento/detalle-evento.module#DetalleEventoPageModule' },
  { path: 'detalle-evento/:idEvento', loadChildren: './detalle-evento/detalle-evento.module#DetalleEventoPageModule' },
  { path: 'comentarios/:idEvento', loadChildren: './comentarios/comentarios.module#ComentariosPageModule' }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
