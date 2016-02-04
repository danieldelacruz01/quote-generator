//$(document).ready(function(){
 var number = 0; 
var data = {
  "quotes": [{
    "quote": "they keep saying 'there are plenty more fish  in the sea' i say fuck you she was my sea",
    "name": "Christopher poindexter",
    "img": "img/p2.jpg"
      },
  {
    "quote": "Success consists of going from failure to failure without loss of enthusiasm.",
    "name": "Winston Churchill",
    "img": "img/p2.jpg"
  },
  {
    "quote": "two things are infinite, the univers, and human stupidity....and im not sure about the universe",
    "name": "Albert Einstein",
    "img": "img/p2.jpg"
  }]
  
}
$("button").click(function(){
    getQuote();
                  });

function random(){
   number = Math.floor(Math.random()*data.quotes.length)
  
  
  
}
 function display(){
    $("#quote").html(data.quotes[number].quote);
   $("#name").html("~ " + data.quotes[number].name);
   $("#imagedrop").attr("src", data.quotes[number].img)
   
 }

function getQuote(){
  display();
  random();
}

//});

