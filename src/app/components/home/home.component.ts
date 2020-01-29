
import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service'

@Component ({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
  releases:any = []
  loading:boolean = true
  error:boolean
  mensajeError: string
  constructor ( private spotify: SpotifyService) {
    this.spotify.getNewReleases()
    .subscribe((data:any) => {
      console.log(data)
      this.error = false
      this.releases =  data
      this.loading = false
    }, (errorServicio) => {
      this.error = true
      this.loading = false  
      this.mensajeError = errorServicio.error.error.message
    })
  }

  // paises: any[] = []
  // constructor (private http: HttpClient) {
  //   console.log('Constructor del Home hecho')
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //   .subscribe( (paises:any) => {
  //     this.paises = paises
  //     console.log(this.paises)
  //   });
  // }

  ngOnInit() {

  }
}