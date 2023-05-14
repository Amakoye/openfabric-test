import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProductFormComponent } from './components/products/product-form/product-form/product-form.component';
import { ProductsComponent } from './components/products/products/products.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'products/add',
    component: ProductFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
