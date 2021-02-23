import { Injectable } from '@angular/core';
import { Candidat } from '../models';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  candidats: Candidat[] = [
    {nom: "Candidat1", age: 21, email: "candidat1@gmail.com"},
    {nom: "Candidat2", age: 22, email: "candidat2@gmail.com"},
    {nom: "Candidat3", age: 23, email: "candidat3@gmail.com"},
    {nom: "Candidat4", age: 24, email: "candidat4@gmail.com"}
   ];

  constructor() { }

  listCandidats() {
    return this.candidats;
  }
}
