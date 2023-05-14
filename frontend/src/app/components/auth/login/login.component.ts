import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  message: string;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log('loggeing lg in');
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
      console.log(user);
      this.authService.login(user).subscribe(({ message }) => {
        this.message = message as string;
        setTimeout(() => {
          this.message = '';
          this.loginForm.reset();
          this.router.navigate(['/']);
        }, 3000);
      });
    }
  }
}
