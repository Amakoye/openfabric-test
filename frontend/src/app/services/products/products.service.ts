import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private api = 'http://localhost:3000/api/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.api, product, httpOptions);
  }

  editProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${id}`, product, httpOptions);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
}
