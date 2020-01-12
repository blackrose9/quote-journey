import { Component } from '@angular/core';

@Component({
   selector:'quotes-list',
   template:`
   <h1>QuotesJourney</h1>
   <hr/>
   <quotes-thumbnail> </quotes-thumbnail>
   `
   // [quote]="quotes"
})

export class QuotesListComponet{
   quotes={
      id:1,
      qoutesays: 'Give yourself time',
      author: 'Unknown',
      postedBy: 'Sarah',
      votes: 0  
   }
}