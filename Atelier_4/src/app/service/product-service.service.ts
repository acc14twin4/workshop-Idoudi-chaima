import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  Products: Product[] = [
    { id: 1, code: 127, libelle: 'PC', prixunitaire: 2000, tauxTva: 10 },
    { id: 2, code: 128, libelle: 'TV', prixunitaire: 1000, tauxTva: 20 },
    { id: 3, code: 128, libelle: 'Table', prixunitaire: 200, tauxTva: 30 },
  ];
  getAllProducts(): Product[] {
    return this.Products;
  }
  count = 0;
  getNbProductsByLibelle(libelle: string) {
    for (let p of this.Products) {
      if (p.libelle == libelle) {
        this.count++;
      }
    }
    return this.count;
  }
}
