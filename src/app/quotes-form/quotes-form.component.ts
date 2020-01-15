import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuoteClass } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html'
})
export class QuotesFormComponent implements OnInit {
  newQuote = new QuoteClass(0,"","","",0,new Date());
  @Output() addQuote = new EventEmitter<QuoteClass>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }


  constructor() { }
  ngOnInit() {
  }

}