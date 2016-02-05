$(document).ready(function(){

var number; 
var data = {
  "quotes": [
  {
    "quote": "They keep saying 'there are plenty more fish in the sea.' I say fuck you she was my sea.",
    "name": "Christopher Poindexter",
    "img": "images/christopherpoindexter.jpg"
  },
  {
    "quote": "Success consists of going from failure to failure without loss of enthusiasm.",
    "name": "Winston Churchill",
    "img": "images/winstonchurchill.jpg"
  },
  {
    "quote": "Two things are infinite: the universe, and human stupidity.... and I'm not sure about the universe.",
    "name": "Albert Einstein",
    "img": "images/alberteinstein.jpg"
  },
  {
    "quote": "History will be kind to me for I intend to write it.",
    "name": "Winston Churchill",
    "img": "images/winstonchurchill.jpg"
  },
  {
    "quote": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    "name": "Albert Einstein",
    "img": "images/alberteinstein.jpg"
  },
  {
    "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
    "name": "Mahatma Gandhi",
    "img": "images/mahatmagandhi.jpg"
  },
  {
    "quote": "The best way to find yourself is to lose yourself in the service of others.",
    "name": "Mahatma Gandhi",
    "img": "images/mahatmagandhi.jpg"
  },
  {
    "quote": "Never interrupt someone doing what you said couldn't be done.",
    "name": "Amelia Earhart",
    "img": "images/ameliaearhart.jpg"
  },
  {
    "quote": "Adventure is worthwhile in itself.",
    "name": "Amelia Earhart",
    "img": "images/ameliaearhart.jpg"
  },
  {
    "quote": "My friend asked me if I wanted a frozen banana, I said 'no, but I want a regular banana later, so ... yeah.'",
    "name": "Mitch Hedberg",
    "img": "images/mitchhedberg.jpg"
  },
  {
    "quote": "You know, I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with 'em later.",
    "name": "Mitch Hedberg",
    "img": "images/mitchhedberg.jpg"
  },
  {
    "quote": "Always do sober what you said you'd do drunk. That will teach you to keep your mouth shut.",
    "name": "Ernest Hemingway",
    "img": "images/ernesthemingway.jpg"
  },
  {
    "quote": "I was on the street. This guy waved to me, and he came up to me and said, 'I'm sorry, I thought you were someone else.' And I said, 'I am.",
    "name": "Demetri Martin",
    "img": "images/demetrimartin.jpg"
  },
  {
    "quote": "I myself prefer my New Zealand eggs for breakfast.",
    "name": "Queen Elizabeth II",
    "img": "images/queenelizabeth.jpg"
  },
  {
    "quote": "You can't get spoiled if you do your own ironing.",
    "name": "Meryl Streep",
    "img": "images/merylstreep.jpg"
  },
  {
    "quote": "Sometimes the road less traveled is less traveled for a reason.",
    "name": "Jerry Seinfeld",
    "img": "images/jerryseinfeld.jpg"
  },
  {
    "quote": "A man who procrastinates in his choosing will inevitably have his choice made for him by circumstance.",
    "name": "Hunter S. Thompson",
    "img": "images/huntersthompson.jpg"
  },
  {
    "quote": "The most courageous act is still to think for yourself. Aloud.",
    "name": "Coco Chanel",
    "img": "images/cocochanel.jpg"
  },
  {
    "quote": "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
    "name": "Ernest Hemingway",
    "img": "images/ernesthemingway.jpg"
  },
  {
    "quote": "Surround yourself with only people who are going to lift you higher.",
    "name": "Oprah Winfrey",
    "img": "images/oprahwinfrey.jpg"
  }
  ]
};
var bgColour = ["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#009688","#FF5722","#795548","#607D8B"]

$("button").click(function(){
    getQuote();
});

function random(){
   number = Math.floor(Math.random()*data.quotes.length)

}
 function display(){
   $("#quote").html(data.quotes[number].quote);
   $("#name").html(data.quotes[number].name);
   $("#imagedrop").attr("src", data.quotes[number].img); 
 }

 function setColour() {
  var colour = bgColour[Math.floor(Math.random()*bgColour.length)];
  $("body").css("background-color", colour);
  $("h4").css("font-color", colour + " !important");
 };

function getQuote(){
  random();
  display();
  setColour();
  
}

getQuote();

});

