import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { HomeComponent } from './home/home.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { CardAggiuntaComponent } from './card-aggiunta/card-aggiunta.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterInterceptor } from './https-inter.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrelloComponent,
    HomeComponent,
    ProdottoComponent,
    CardAggiuntaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpsInterInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
