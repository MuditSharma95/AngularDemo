import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators"
import { FormGroup } from "@angular/forms";
import { ProductModel } from "./product";

@Injectable({
  providedIn:'root'
})
export class ProductService {
  private productUrl = "https://localhost:44369/products"
  _baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this._baseUrl +'products/Get');;
  }

  addProduct(contactForm: ProductModel): void {
    this.http.post<any>(this._baseUrl + 'products/AddProduct', contactForm).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
  //getProducts(): Observable<IProducts[]> {
  //  return this.http.get<IProducts[]>('/assets/products.json');
  //}


  getProductsById(id:string): Observable<ProductModel> {
    return this.http.get<ProductModel>(this._baseUrl + 'products/GetById/?id='+id);
  }

  //getProducts(): Observable<IProducts[]>{
  //  return this.http.get<IProducts[]>(this.productUrl).pipe(
  //    tap(data => console.log('All: ' + JSON.stringify(data))),
  //    catchError(this.handleError)
  //  );
  //}
 
}
