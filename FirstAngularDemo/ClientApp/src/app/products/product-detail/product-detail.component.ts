import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from '../product.service';
import { IProducts } from '../product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProducts;
  constructor(private route: ActivatedRoute, private router: Router, private _productService: ProductService) {
     
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getProductBy(id);
    }
  }

  getProductBy(id: string) {
    this._productService.getProductsById(id).subscribe({
      next: product => this.product = product,
      error: error => console.error(error)
    });
  }

  onBack(): void {
    this.router.navigate(['/product-list']);
  }

}
