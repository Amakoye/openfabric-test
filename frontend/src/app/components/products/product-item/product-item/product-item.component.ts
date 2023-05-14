import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Product } from 'src/types';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() onDeleteProduct = new EventEmitter();
  @Input() token: string | null;
  access_token: Observable<string>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.access_token = this.authService.getToken();
  }

  deleteProduct(): void {
    this.onDeleteProduct.emit();
  }
}
