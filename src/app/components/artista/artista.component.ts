
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})

 export class ArtistaComponent {
   artista:any = {}
   loading: boolean 
   topTrack: any[] = []
   constructor ( private router: ActivatedRoute, private spotify: SpotifyService ) {
     this.loading = true
     this.router.params.subscribe(params => {
      this.getArtista(params['id'])
      this.getTopTrack(params['id'])
     })
   }

   getArtista (id: string) {
    this.spotify.getArtista(id)
    .subscribe(data => {
      this.artista = data
      this.loading = false
    })
   }

   getTopTrack (id:string) {
      this.spotify.getTopTrack(id)
      .subscribe(topTrack => {
        this.topTrack = topTrack
      })
   }
}