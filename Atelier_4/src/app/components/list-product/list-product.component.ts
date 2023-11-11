import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductServiceService } from 'src/app/service/product-service.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private _productService: ProductServiceService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getNbProductsByLibelle('PC');
  }
  ListProduct!: Product[];
  counting = 0;
  getAllProducts() {
    this.ListProduct = this._productService.getAllProducts();
  }
  getNbProductsByLibelle(libelle: string){
    this.counting= this._productService.getNbProductsByLibelle(libelle);
  }
}
