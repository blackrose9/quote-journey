import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuoteClass } from 'src/app/quote';


@Component({
  selector: 'app-quotes-detail',
  template:
  `
  <br/>
    <p>Posted By: {{quote.postedBy}}</p>
    <p>Votes: {{quote.votes}}</p>
    <p>Date Posted: {{quote.datePosted}}</p>
    <button (click)= 'deleteQuote(true)'>Nope</button>
  `
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote:QuoteClass;
  @Output() isNope = new EventEmitter<boolean>();

  deleteQuote(nope:boolean){
    this.isNope.emit(nope);
  }

  constructor() { }
  ngOnInit() {
  }

}
