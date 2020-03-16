import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ProductModel } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productData: ProductModel;
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private productService: ProductService) {

    this.contactForm = this.createFormGroupWithBuilder();
  }

  createContactForm() {
    return new FormGroup({
      productName: new FormControl(),
      model: new FormControl(),
      rating: new FormControl(),
    })
  }


  createFormGroupWithBuilder() {
    return this.formBuilder.group({
      productForm: this.formBuilder.group({
      productName: ['', Validators.required],
      model: ['', Validators.required],
        rating: ['', Validators.required]
      })
    });
  }



  createFormGroupWithBuilderWithClass() {
    return this.formBuilder.group({
        productForm :this.formBuilder.group(new ProductModel())
      });
  }


  //userprofileForm = this.formBuilder.group({
  //  firstName: ['', Validators.required],
  //  lastName: [''],
  //  address: this.formBuilder.group({
  //    address1: [''],
  //    address2: [''],
  //    state: [''],
  //    zip: [''],
  //  })
  //})


  ngOnInit() {
  }

  onSubmit() {
    //result.productname = Object.assign({}, result.productname);

    console.log('Your form data : ', this.contactForm.value);
    this.productService.addProduct(this.contactForm.get('productForm').value);
    this.onReset();
  }

  onReset() {
    this.contactForm.reset();
  }
}




