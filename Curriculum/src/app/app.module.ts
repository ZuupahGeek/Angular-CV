import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArbeteComponent } from './views/arbete/arbete.component';
import { UtbildningComponent } from './views/utbildning/utbildning.component';
import { HobbyComponent } from './views/hobby/hobby.component';
import { KontaktComponent } from './views/kontakt/kontakt.component';
import { InfoCardsComponent } from './components/info-cards/info-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArbeteComponent,
    UtbildningComponent,
    HobbyComponent,
    KontaktComponent,
    InfoCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
