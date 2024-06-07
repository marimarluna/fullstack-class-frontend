import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  dataForm = new FormGroup({
    name: new FormControl('Test'),
    description: new FormControl(''),
    price: new FormControl()
  })
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.productService.createProduct(this.dataForm.value).subscribe(product => {
      console.log("product", product)
    })
  }

}
