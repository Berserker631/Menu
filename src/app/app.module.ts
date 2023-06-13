import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DxButtonModule, DxToolbarModule } from 'devextreme-angular';
import { MainComponent } from './main/main.component';
import { MainItemComponent } from './main-item/main-item.component';
import { MainButtonComponent } from './main-button/main-button.component';
import { MainMobileComponent } from './main-mobile/main-mobile.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainItemComponent,
    MainButtonComponent,
    MainMobileComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  imports: [
    DxButtonModule,
    DxToolbarModule,
    BrowserModule,
    AppRoutingModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
