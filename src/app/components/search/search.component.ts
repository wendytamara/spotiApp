import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  releases:any = []
  loading: boolean 
  constructor (private spotify: SpotifyService) {
  }

  buscar(value:string) {
    this.loading = true
    this.spotify.getArtistas(value)
    .subscribe((data:any) => {
      this.releases = data
      this.loading = false
    })
  }

}
