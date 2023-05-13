import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/types';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() onDeleteProduct = new EventEmitter();

  constructor(private productsService: ProductsService) {}

  deleteProduct(): void {
    this.onDeleteProduct.emit();
  }
}
