import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import {InstagramPostDirective} from './instagram-post.directive';
import { EmbedSocialWidgetComponent } from './embed-social-widget/embed-social-widget.component';
import { FacebookReviewsComponent } from './facebook-reviews/facebook-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    InstagramPostDirective,
    EmbedSocialWidgetComponent,
    FacebookReviewsComponent
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
