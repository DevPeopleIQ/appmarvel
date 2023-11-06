import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { BitacoraComponent } from './bitacora/characters.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'characters',component:CharactersComponent},
  {path:'bitacora',component:BitacoraComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }