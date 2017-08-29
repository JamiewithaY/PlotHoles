$(document).ready(function(){

 //scoreboard variables
    correct= 0;
    incorrect =0;


    
//gif ajax call for a winning and losing gif
function scoreboard(){
//win call
    if(correct>incorrect){
    var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=applause";
      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After the data from the AJAX request comes back
      .done(function(response) {
        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;
        // Creating and storing an image tag
        var winImage = $("<img>");
        // Setting the catImage src attribute to imageUrl
        winImage.attr("src", imageUrl);
        winImage.attr("alt", "You be winning");
        // Prepending the catImage to the images div
        $("#winnerLoser").prepend(winImage);
        $("#alertPlayer").html("YOU WON!");
      });
        }else if(correct<incorrect){
//loss call
      var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=incorrect";
      // Perfoming an AJAX GET request to our queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After the data from the AJAX request comes back
      .done(function(response) {
        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;
        // Creating and storing an image tag
        var loseImage = $("<img>");
        // Setting the catImage src attribute to imageUrl
        loseImage.attr("src", imageUrl);
        loseImage.attr("alt", "You be winning");
        // Prepending the catImage to the images div
        $("#winnerLoser").prepend(loseImage);
        $("#alertPlayer").html("YOU SUCK!");
      });
        console.log(response);
      
    }

  } 




//Movie One
$(".batman").one("click",function(){

var uniqueId = 1;
var movie1= ["Batman", "Superman", "Iron Man", "Ant-Man"];


for(i=0; i<movie1.length; i++){

var queryURL = "http://www.omdbapi.com/?t=" + movie1[i] + "&y=&plot=short&apikey=4175f271";


$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",

  }).done(function(response) {

    
    var movie1plot = response.Plot;
      
      
    //dynamically creating a <p> tag for each item in the array-for each plot
      var plotp = $("<p>" ).text(movie1plot);
      
      //adding the id to each movie
      plotp.attr("id", "a" + uniqueId++);

      //prepend the plots to the page
      $("#plot").append(plotp);
        
      
    console.log(movie1plot);
    console.log(plotp);


    //click function for selecting the correct-plot
      $("#a1").click(function(){   
      $("#a2, #a3, #a4").hide(2000);
      $("#answer1").html($("#a1"));
        });

    });


};//for loop ending

$(document).on("click", "#a1", function(){
  correct++;
  $("#w2").html(correct);
});

$(document).on("click","#a2,#a3,#a4", function(){
  incorrect++;
  $("#l2").html(incorrect);
});

}); //batman button ending




//Movie Two
$(".backToTheFuture").one("click", function(){

var uniqueId = 1;
var movie1 = ["Batteries Not Included", "Back To The Future", "ET", "Runaway"];


for(i=0; i<movie1.length; i++){

var queryURL = "http://www.omdbapi.com/?t=" + movie1[i] + "&y=&plot=short&apikey=4175f271";


$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",

  }).done(function(response) {

    
    var movie1plot = response.Plot;
      
      
        //dynamically creating a <p> tag for each item in the array-for each plot
      var plotp = $("<p>" ).text(movie1plot);
      
      //adding the id to each movie
      plotp.attr("id", "b" + uniqueId++);
     
      
      //prepend the plots to the page
      $("#plot").append(plotp);
        
      
    console.log(movie1plot);
    console.log(plotp);
    
      //click function for selecting the correct-plot id1 is correct
      $("#b1, #b2, #b3, #b4").click(function(){    
      $("#b1, #b3, #b4").hide(2000);
      $("#answer2").html($("#b2"));
      });
                

    });


};//for loop ending

$(document).on("click", "#b2", function(){
  correct++;
  $("#w2").html(correct);
});

$(document).on("click","#b1,#b3,#b4", function(){
  incorrect++;
  $("#l2").html(incorrect);
});
}); //Back to the future button 



//Movie Three
$(".sixteenCandles").one("click", function(){

var uniqueId = 1;
var movie1 = ["Pretty In Pink", "Sixteen Candles", "French Kiss", "Never Been Kissed"];


for(i=0; i<movie1.length; i++){

var queryURL = "http://www.omdbapi.com/?t=" + movie1[i] + "&y=&plot=short&apikey=4175f271";


$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",

  }).done(function(response) {

    
    var movie1plot = response.Plot;
      
      
        //dynamically creating a <p> tag for each item in the array-for each plot
      var plotp = $("<p>" ).text(movie1plot);
      
      //adding the id to each movie
      plotp.attr("id", "c" + uniqueId++);
      
      //prepend the plots to the page
      $("#plot").append(plotp);
        
      
    console.log(movie1plot);
    console.log(plotp);
    
     
      //click function for selecting the correct-plot
      $("#c1, #c2, #c3, #c4").click(function(){    
      $("#c1, #c3, #c4").hide(2000);
      $("#answer3").html($("#c2"));
      });
          

    });


};//for loop ending

//adding the score
$(document).on("click", "#c2", function(){
  correct++;
  $("#w2").html(correct);
});

$(document).on("click","#c1,#c3,#c4", function(){
  incorrect++;
  $("#l2").html(incorrect);
});
}); //sixteen candles button ending

//Movie Four
$("#topGun").one("click", function(){

var uniqueId = 1;
var movie1= ["My Girl", "Orange County", "Mad Max", "Top Gun"];


for(i=0; i<movie1.length; i++){

var queryURL = "http://www.omdbapi.com/?t=" + movie1[i] + "&y=&plot=short&apikey=4175f271";


$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",

  }).done(function(response) {

    
    var movie1plot = response.Plot;
      
      
        //dynamically creating a <p> tag for each item in the array-for each plot
      var plotp = $("<p>" ).text(movie1plot);
      
      //adding the id to each movie
      plotp.attr("id", "d" + uniqueId++);
      
      //prepend the plots to the page
      $("#plot").append(plotp);
        
      
    console.log(movie1plot);
    console.log(plotp);
    
     //click function for selecting the correct-plot
      $("#d1, #d2, #d3, #d4").click(function(){    
      $("#d1, #d2, #d3").hide(2000);
      $("#answer4").html($("#d4"));
      });
    


    });



};//for loop ending
//adding the score
$(document).on("click", "#d4", function(){
  correct++;
  $("#w2").html(correct);
});

$(document).on("click","#d1,#d3,#d2", function(){
  incorrect++;
  $("#l2").html(incorrect);
});

}); //top gun button ending



//Movie Five
$(".standByMe").one("click", function(){


var uniqueId= 1;
var movie1= ["Gremlins", "Predator", "Stand By Me", "Aliens"];


for(i=0; i<movie1.length; i++){

var queryURL = "http://www.omdbapi.com/?t=" + movie1[i] + "&y=&plot=short&apikey=4175f271";


$.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",

  }).done(function(response) {

    
    var movie1plot = response.Plot;
      
      
        //dynamically creating a <p> tag for each item in the array-for each plot
      var plotp = $("<p>" ).text(movie1plot);
      
      //adding the id to each movie
      plotp.attr("id", "e"+ uniqueId++);
      
      //prepend the plots to the page
      $("#plot").append(plotp);
        
      
    console.log(movie1plot);
    console.log(plotp);
    
      //click function for selecting the correct-plot
      $("#e1, #e2, #e3, #e4").click(function(){    
      $("#e1, #e2, #e4").hide(2000);
      $("#answer5").html($("#e3"));
      });
          

    });


};//for loop ending
$(document).on("click", "#e3", function(){
  correct++;
  $("#w2").html(correct);
});

$(document).on("click","#e1,#e4,#e2", function(){
  incorrect++;
  $("#l2").html(incorrect);
});
}); //StandByMe button ending
//score eval condition
var clicking = 0;
$(".nosepick").on("click", function(){
  clicking++;
  if (clicking == 5){
    scoreboard();
  }




});

});  

//Giphy fun
//Once the last movie button has been selected, pull a "winner" gif or a "Looser" gif based on the final score

//create an ajax request for the "winner" and "loser" gif
//api key 4a62a653c9304fe6a42bd37fba4a7817

 
