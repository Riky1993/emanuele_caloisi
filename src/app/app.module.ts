import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import {InstagramPostDirective} from './instagram-post.directive';
import { EmbedSocialWidgetComponent } from './embed-social-widget/embed-social-widget.component';
import { FacebookReviewsComponent } from './facebook-reviews/facebook-reviews.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FormazioneComponent } from './formazione/formazione.component';
import { MetodoComponent } from './metodo/metodo.component';
import { PrezziComponent } from './prezzi/prezzi.component';
import { NewsComponent } from './news/news.component';
import { ContattiComponent } from './contatti/contatti.component';
import { GenericAboutMeComponent } from './about-me/generic-about-me/generic-about-me.component';
import { GenericContattiComponent } from './contatti/generic-contatti/generic-contatti.component';
import { GenericFacebookReviewsComponent } from './facebook-reviews/generic-facebook-reviews/generic-facebook-reviews.component';
import { GenericFormazioneComponent } from './formazione/generic-formazione/generic-formazione.component';
import { GenericMetodoComponent } from './metodo/generic-metodo/generic-metodo.component';
import { GenericNewsComponent } from './news/generic-news/generic-news.component';
import { GenericPrezziComponent } from './prezzi/generic-prezzi/generic-prezzi.component';

@NgModule({
  declarations: [
    AppComponent,
    InstagramPostDirective,
    EmbedSocialWidgetComponent,
    FacebookReviewsComponent,
    AboutMeComponent,
    FormazioneComponent,
    MetodoComponent,
    PrezziComponent,
    NewsComponent,
    ContattiComponent,
    GenericAboutMeComponent,
    GenericContattiComponent,
    GenericFacebookReviewsComponent,
    GenericFormazioneComponent,
    GenericMetodoComponent,
    GenericNewsComponent,
    GenericPrezziComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
