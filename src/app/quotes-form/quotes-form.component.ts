import { Component, OnInit } from '@angular/core';
import { QuoteClass } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html'
})
export class QuotesFormComponent implements OnInit {
  newQuote = new QuoteClass(0,"","","",0,new Date());
  constructor() { }

  ngOnInit() {
  }

}