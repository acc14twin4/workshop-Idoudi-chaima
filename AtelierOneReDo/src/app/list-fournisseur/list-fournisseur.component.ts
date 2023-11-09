import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../models/fournisseur';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent  {

   list: Fournisseur [] = [
    {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
    {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
    {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
    {idFournisseur:400,code:"40ABC452",libelle:"asus"}
    ];
 
    // Méthode pour supprimer un fournisseur
  supprimerFournisseur(id: number) {
    this.list = this.list.filter(f => f.idFournisseur !== id); // verfie si id est different de f.idFournisseur 
                                                              //si c'est le cas il l'ajoute a la nouvelle this.list 
                                                              //sinon il ne l'ajoute pas (il sera ecrasé) 
  }

}
