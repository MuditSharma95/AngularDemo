
import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from './product.service';
import { ProductModel } from './product';


@Component({
  selector: 'app-productlist',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  modalHeader: string = "Product List";
  // _listFilter: string;
  products: ProductModel[];

  constructor(private _productService: ProductService) {

  }

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

  //  http.get<IProducts[]>(baseUrl + 'Products').subscribe(
  //    result => {this.products = result;
  //  }, error => console.error(error));
  //}


  viewProduct(id: string): void {
    alert(id);
  }
  rating(message: string): void {
    this.modalHeader = message;
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next: products => { this.products = products; },
      error: error => console.error(error)
    });
  }

}

