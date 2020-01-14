import { Component, OnInit, Input } from '@angular/core';
import { QuoteClass } from 'src/app/quote';


@Component({
  selector: 'app-quotes-detail',
  template:
  `
  <br/>
    <p>Posted By: {{quote.postedBy}}</p>
    <p>Votes: {{quote.votes}}</p>
    <p>Date Posted: {{quote.datePosted}}</p>
  `
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote:QuoteClass;

  constructor() { }
  ngOnInit() {
  }

}
