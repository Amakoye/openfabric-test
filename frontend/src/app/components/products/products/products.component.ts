import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  message: string;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  onDelete(id: string): void {
    this.products = this.products.filter((product) => product.id !== id);
    this.productsService.deleteProduct(id).subscribe(() => {
      this.message = 'Product deleted succesfully';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    });
  }
}
