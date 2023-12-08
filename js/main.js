var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    quote:
      "“If we rated greatness by the influence of the great, we will say 'Muhammad' is the greatest of the great in history”",
    author: "― Will Durant",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: "― Marilyn Monroe",
  },
  {
    quote:
      "“Do they not then consider the Quran carefully? Had it been from other than Allah, they would surely have found therein much contradictions.”",
    author: "― Anonymous, القران الكريم",
  },
];

var lastQoute = "";
function genratQoute() {
  do {
    var num = Math.floor(Math.random() * quotes.length);
  } while (lastQoute === quotes[num].quote);
  var qouteAuther = quotes[num].author;
  var qoute = quotes[num].quote;
  document.getElementById("qouteAuther").innerHTML = qouteAuther;
  document.getElementById("qoute").innerHTML = qoute;
  lastQoute = qoute;
}
