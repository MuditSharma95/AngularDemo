import { NgModule } from '@angular/core';
import { ProductListComponent } from '../product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../product-detail.guard';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    
    RouterModule.forChild([
      { path: '', component: ProductListComponent, pathMatch: 'full' },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] },
    ]),
    SharedModule,
  ]
})
export class ProductmoduleModule { }
