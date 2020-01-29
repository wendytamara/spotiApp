import { Component } from '@angular/core';
import { SpotifyService } from '../../src/app/services/spotify.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor( private services: SpotifyService) {
    this.services.getToken()
  }
}
