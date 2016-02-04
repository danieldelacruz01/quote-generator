$(document).ready(function(){

var number; 
var data = {
  "quotes": [{
    "quote": "They keep saying 'there are plenty more fish in the sea.' I say fuck you she was my sea.",
    "name": "Christopher Poindexter",
    "img": "images/winstonchurchill.jpg"
      },
  {
    "quote": "Success consists of going from failure to failure without loss of enthusiasm.",
    "name": "Winston Churchill",
    "img": "images/winstonchurchill.jpg"
  },
  {
    "quote": "Two things are infinite: the universe, and human stupidity.... and I'm not sure about the universe.",
    "name": "Albert Einstein",
    "img": "images/winstonchurchill.jpg"
  }]
};

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

function getQuote(){
  random();
  display();
  
}

getQuote();

});

