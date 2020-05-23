import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import  {ArticlesModule} from './articles/articles.module';
import {StaticpagesModule} from './staticpages/staticpages.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterilModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticlesModule,
    StaticpagesModule,
    BrowserAnimationsModule,
    MaterilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
