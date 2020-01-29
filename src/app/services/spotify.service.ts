import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token = ''
  constructor( private http: HttpClient) {
    console.log('servicio listo para usarlo *')
  }
  
   getToken () {  
    this.http.get('https://wendy-api.herokuapp.com/costCenter/spotify')
    .subscribe((data:any) => {
      this.token = data.access_token
    })
  }

  getQuery( query:string) {
    const URL = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(URL, {headers})
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items ))
  }

  getArtistas(termino) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data => data['artists'].items ))
  }

  getArtista ( id: string ) {
    return this.getQuery(`artists/${id}`)
  }

  getTopTrack (id:string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map( data => data['tracks'] ))
  }
}
