import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header/header.component';
import { ProductFormComponent } from './components/products/product-form/product-form/product-form.component';
import { ProductItemComponent } from './components/products/product-item/product-item/product-item.component';
import { ProductsComponent } from './components/products/products/products.component';
import { AlertComponent } from './components/layout/alert/alert/alert.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoadingComponent } from './components/layout/loading/loading/loading.component';
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductFormComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
