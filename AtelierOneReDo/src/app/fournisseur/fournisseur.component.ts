import { Serializer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../models/fournisseur';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {

  idFournisseur: number = 105;
  code: String = 'A104B89';
  libelle: String = 'MyTeck';
  hide: boolean = false;
  

  changeHide() {
    this.hide = !this.hide;
  }



}
