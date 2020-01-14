import { Component } from '@angular/core'
import { QuoteClass } from "../quote";

@Component({
   selector: 'quotes-thumbnail',
   templateUrl: './quotes-thumbnail.component.html'
})

export class QuotesThumbnailComponent{
   quotes:QuoteClass[]=[
      {
         id: 1, 
         quoteSays: "Give yourself time", 
         author: "UnknownAuthor",
         postedBy: "Sarah",
         votes: 0,
         datePosted: "02/02/2020"
      },
      {
         id: 2,
         quoteSays: "Give yourself space",
         author: "UnknownAuthor",
         postedBy: "Sarah",
         votes: 0,
         datePosted: "02/02/2020"
      },
      {
         id: 3,
         quoteSays: "Give yourself freedom",
         author: "UnknownAuthor",
         postedBy: "Sarah",
         votes: 0,
         datePosted: "02/02/2020"
      }
   ];

   toggleDetails(index){
      this.quotes[index].showDetails = !this.quotes[index].showDetails;
    }

    deleteQuote(isNope, index){
      if (isNope) {
        this.quotes.splice(index,1);
      }
    }
}