import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component'

// IMPORTAR RUTAS
import { ROUTES } from './components/app.routes';

// PIPES
import { NoImagePipe } from './pipes/no-image.pipe';
import { DomseguroPipe } from '../app/pipes/domseguro.pipe';

// IMPORTAR SERVICIOS

// import { SpotifyService } from './services/spotify.service'

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    DomseguroPipe,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NoImagePipe,
    TarjetasComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [
    // SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
