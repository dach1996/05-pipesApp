import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsModule } from './products/products.module';
import localEsEc from '@angular/common/locales/es-EC';
import localfrCa from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsEc);
registerLocaleData(localfrCa);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    BrowserAnimationsModule,
    ProductsModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-EC'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
