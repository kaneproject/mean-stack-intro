import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ejemplo01baseComponent } from './ejemplo01base/ejemplo01base.component';
import { Ejemplo02InputComponent } from './ejemplo02-input/ejemplo02-input.component';
import { Ejemplo03ProviderComponent } from './ejemplo03-provider/ejemplo03-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo01baseComponent,
    Ejemplo02InputComponent,
    Ejemplo03ProviderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
