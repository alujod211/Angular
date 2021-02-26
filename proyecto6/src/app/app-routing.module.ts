import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JuegodadosComponent } from './juegodados/juegodados.component';
import { ArcadeComponent } from './arcade/arcade.component';

const routes: Routes = [
  {
    path:'juegodados',
    component:JuegodadosComponent
  },
  {
    path:'acercade',
    component:ArcadeComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
