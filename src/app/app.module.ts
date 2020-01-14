import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesThumbnailComponent } from './quotes/quotes-thumbnail.component';
import { QuoteDetailComponent } from './quotes/quotes-details/quotes-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesThumbnailComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
