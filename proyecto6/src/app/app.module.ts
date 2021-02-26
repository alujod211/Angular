import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegodadosComponent } from './juegodados/juegodados.component';
import { DadoComponent } from './dado/dado.component';
import { ArcadeComponent } from './arcade/arcade.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegodadosComponent,
    DadoComponent,
    ArcadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
