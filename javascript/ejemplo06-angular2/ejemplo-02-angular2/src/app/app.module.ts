import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MiComponenteNuevoComponent } from './mi-componente-nuevo/mi-componente-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteNuevoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,MiComponenteNuevoComponent]
})
export class AppModule { }
