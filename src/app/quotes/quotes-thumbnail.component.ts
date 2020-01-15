import { Component } from '@angular/core'
import { QuoteClass } from "../quote";

@Component({
   selector: 'quotes-thumbnail',
   templateUrl: './quotes-thumbnail.component.html'
})

export class QuotesThumbnailComponent{
   quotes:QuoteClass[]=[
      new QuoteClass(1,"Give yourself time", 
          "UnknownAuthor",
          "Sarah",
          0,
          new Date(2020,3,14)
      ),
      new QuoteClass(2,
          "Give yourself space",
          "UnknownAuthor",
          "Sarah",
          0,
          new Date(2020,3,14)),
      new QuoteClass(3,
          "Give yourself freedom",
          "UnknownAuthor",
          "Sarah",
          0,
          new Date(2020,3,14))

   ];

   addNewQuote(quote){
      let quotesLength = this.quotes.length;
      quote.id=quotesLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
   }

   toggleDetails(index){
      this.quotes[index].showDetails = !this.quotes[index].showDetails;
    }

    deleteQuote(isNope, index){
      if (isNope) {
        this.quotes.splice(index,1);
      }
    }
}