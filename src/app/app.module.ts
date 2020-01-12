import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesListComponet } from './quotes/quotes-list.component';
import { QuotesThumbnailComponent } from './quotes/quotes-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesListComponet,
    QuotesThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
