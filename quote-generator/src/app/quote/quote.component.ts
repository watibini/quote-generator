import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Wati David', 'True success is impacting the world with the investment within your personality.'),
    new Quote(2, 'Marvin Makhanu', 'Go big or simply go home.'),
    new Quote(3, 'Brenda Nekoye', 'Our greatest fear is not that we are inadequate but that we are powerfull, our playing small does not serve the world in anyway.'),
    new Quote(4, 'Lula Okiyo', 'stay hungry and stay foolish')
  ]
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)

  }


  constructor() { }

  ngOnInit() {
  }

}
