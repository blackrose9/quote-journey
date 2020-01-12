import { Component } from '@angular/core'

@Component({
   selector: 'quotes-thumbnail',
   template: `
   <div class="thumbnail">
      <h3>{{quote.quotesays}}</h3>
      <p>{{quote.author}}</p>
      <p>{{quote.postedBy}}</p>
      <p>{{quote.votes}} votes</p>
   </div>
   `
   // <ul>
   //    <li *ngFor='let quote of quotes'>{{quote}}</li>
   // </ul>
})

export class QuotesThumbnailComponent{

}