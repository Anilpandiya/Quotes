// Import stylesheets
import './style.css';

// Write Javascript code!
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

var currentQuote=''; var currentAuthor='';
function getQuote(){
	
		var qIndex = Math.floor(Math.random() * 10);

		$.getJSON("https://talaikis.com/api/quotes/random/",function(json){
			    
				$("#text").html(json['quote']);
				$("#author").html(json['author']);

				 var color = Math.floor(Math.random() * colors.length);

			      $("html body").animate({ backgroundColor: colors[color] }, 1000); 
			        
			      $(".button").animate({ backgroundColor: colors[color] }, 1000);
			        	      
                  currentQuote = json['quote'];
                  currentAuthor= json['author'];
		});
}

$(document).ready(function(){

	getQuote();
  
	$("#newone").on("click",function(){getQuote()});

	$("#twitter").on("click",function(){

		$(this).attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+currentQuote);
	});

	$("#tumblr").on("click",function(){

		$(this).attr('href', 'https://www.tumblr.com/search/'+currentAuthor);
	});
});
