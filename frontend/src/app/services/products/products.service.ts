import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private api = `${environment.apiUrl}/products`;
  httpOptions: HttpHeaders;

  constructor(private http: HttpClient) {
    this.httpOptions = this.setHeaders();
  }

  private setHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .set('Header-Name', 'Header-Value');
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.api, product, {
      headers: this.httpOptions,
    });
  }

  editProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${id}`, product, {
      headers: this.httpOptions,
    });
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`, {
      headers: this.httpOptions,
    });
  }
}
