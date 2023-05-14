import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  access_token: Observable<string>;

  title = 'Open fabric';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.access_token = this.authService.getToken();
  }

  onLogout(): void {
    this.authService.removeToken();
  }
}
