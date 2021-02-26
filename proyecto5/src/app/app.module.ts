import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ElementosModule } from './elementos/elementos.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ElementosModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
