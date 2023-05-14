import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = `${environment.apiUrl}/auth`;
  private tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  constructor(private http: HttpClient, private zone: NgZone) {}

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.api}/login`, user, httpOptions);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.api}/register`, user, httpOptions);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token); // Emit the new token value
  }

  getToken(): Observable<string> {
    const storedToken = localStorage.getItem('token');
    if (storedToken && !this.tokenSubject.value) {
      this.tokenSubject.next(storedToken);
    }
    return this.tokenSubject.asObservable();
  }

  removeToken(): void {
    localStorage.removeItem('token');
    this.tokenSubject.next(''); // Emit null to signify token removal
  }
}
