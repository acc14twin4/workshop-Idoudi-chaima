import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductServiceService } from './service/product-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
