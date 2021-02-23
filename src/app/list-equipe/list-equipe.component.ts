import { Component, OnInit } from '@angular/core';
import { Candidat } from '../models';
import { AlbumsService } from '../services/albums.service';
@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {

  equipe: string = "Global Knowledge - Equipe Mobile";
  names: string[] = ["Bédélo", "Nassim", "Mariem", "Isabelle", "Liam", "Ilhem", "Safa", "Kenji", "Catherine", "Olivier", "Ousmana", "Wendong", "Assia", "Rado"];
  

  res: boolean = true;
  candidats: Candidat[];

  formation: string = "Ionic-Angular";

  constructor(private albumsService: AlbumsService) {
    
   }

  ngOnInit(): void {
    this.candidats = this.albumsService.listCandidats();
  }

  public affichage() {
    alert("click");
    this.res = !this.res;
  }

}
