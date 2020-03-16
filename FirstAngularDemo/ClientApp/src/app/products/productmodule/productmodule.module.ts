import { NgModule } from '@angular/core';
import { ProductListComponent } from '../product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../product-detail.guard';
import { SharedModule } from '../../shared/shared.module';
import { AddProductComponent } from '../add-product/add-product.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    AddProductComponent,
  ],
  imports: [
    
    RouterModule.forChild([
      { path: '', component: ProductListComponent, pathMatch: 'full' },
      { path: 'add-product', component: AddProductComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] },
    ]),
    SharedModule,
  ]
})
export class ProductmoduleModule { }
