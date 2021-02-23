import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Joueur, Album } from '../models';
import { JoueursService } from '../services/joueurs.service';

@Component({
  selector: 'app-list-joueurs',
  templateUrl: './list-joueurs.component.html',
  styleUrls: ['./list-joueurs.component.css']
})
export class ListJoueursComponent implements OnInit {

  joueurs: Joueur[];
  albums;
  albumsSubscription: Subscription;

  constructor(private joueursService: JoueursService) {
    
   }

  ngOnInit(): void {
    this.joueurs = this.joueursService.listJoueurs();

    /*this.joueursService.getAlbums().subscribe(
      response => {
      this.albums = response;
      },
      (error) => {
        alert('An error has been occured!');
      }
      );*/
      this.joueursService.getAlbumsFromServer();
      this.albumsSubscription = this.joueursService.albumsSubject.subscribe(
        (albums: any[]) => {
          this.albums = albums;
        }
      );
      this.joueursService.emitAlbumsSubject();
     
  }

}
