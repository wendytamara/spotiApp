import { Routes } from '@angular/router'
import { ArtistaComponent } from './artista/artista.component'
import { HomeComponent } from './home/home.component'
import { SearchComponent } from './search/search.component'
// import { Route } from '@angular/compiler/src/core'

export const ROUTES: Routes = [
    { path: 'artista/:id', component: ArtistaComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
]