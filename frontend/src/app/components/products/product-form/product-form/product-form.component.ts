import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private productsServive: ProductsService
  ) {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      brand: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    if (this.productId) {
      this.productsServive
        .getProduct(this.productId)
        .subscribe((product) => this.productForm.patchValue(product));
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      if (this.productId) {
        this.productsServive
          .editProduct(this.productId, product)
          .subscribe(() => {
            this.setMessage('Product updated successfully');
          });
      } else {
        this.productsServive.addProduct(product).subscribe(() => {
          this.setMessage('Product added successfully');
        });
      }
    }
  }

  setMessage(message: string): void {
    this.message = message;
    setTimeout(() => {
      this.message = '';
      this.productForm.reset();
    }, 3000);

    return;
  }
}
