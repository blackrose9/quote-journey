import { Component } from '@angular/core';

@Component({
  selector: 'quotes-app',
  template:`
   <h1>QuotesJourney</h1>
   <hr/>
   <quotes-thumbnail> </quotes-thumbnail>
   `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
}