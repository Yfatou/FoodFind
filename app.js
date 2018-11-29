//Javascript file


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDECKdlUUwWo_jL0z_teQaPLBcSiwqRcIs",
    authDomain: "food-project-4b9c6.firebaseapp.com",
    databaseURL: "https://food-project-4b9c6.firebaseio.com",
    projectId: "food-project-4b9c6",
    storageBucket: "food-project-4b9c6.appspot.com",
    messagingSenderId: "103528475709"
    };

firebase.initializeApp(config);

//Firebase database declaration
var database = firebase.database();


$(document).ready(function(){

    //On Click event on the FindFood button.
    //The click on this button will trigger the search  
    $("#findFood").on("click", function(){
        event.preventDefault(); 
    
        //Call the reset function to empty the Div
        reset();

        //the search value enterd by the user
        var searchTerms = $("#food-input").val();

        //Control the value entered by the user
        //The value entered should be a string
        if (searchTerms == ""){
            //No value entered
            //A modal with a message is shown
            $("#wrongValueModal").modal("show");
        } else if (Number(searchTerms)){
            //A number is entered
            //A modal with a message is shown
            $("#wrongValueModal").modal("show");
            
            //The input box is emptied
            $("#food-input").val("");
            
        } else {//ADD A CONTROL TO MAKE SURE IT'S A STRING 
            console.log("this is the usertext " + searchTerms);
     
            $('#p').text(searchTerms); // text function takes value as parameter
         
            //Function to get the recipes (5) from the API and display them in the Div
            function GetRecipe (){
                var search = searchTerms;
                var firstNum = 0;
                var secondNum = 6;
                var appid = "ec426dec";
                var appkey = "93ae402db25814afafd557b63c007d31";
                var queryURL = "https://api.edamam.com/search?q="+search+"&from=" + firstNum + "&to=" + secondNum + "&app_id="+appid+"&app_key="+appkey;
                console.log(queryURL);

                $.ajax({
                    url: queryURL,
                    method: "GET",  
                }).then(function(response){
                    console.log(response);
                    //The 5 recipes that we will display are stocked in a variable arrar
                    var foods = response.hits;
                    for(var i = 0; i < foods.length ; i++){                                 
                        var recipeTest = response.hits[i].recipe.label;//Title of the recipe
                        var recipeingredientLines = response.hits[i].recipe.ingredientLines;//Recipe ingredients
                        var recipeImage = response.hits[i].recipe.image;//Recipe image
                        
                        var imageDiv = $("<div class='imageDisplay'>");//We create a new div to display the recipe image
                        var pRecipeTitle = $("<h2>").text(recipeTest);
                        var pRecipeIngredients = $("<div id = 'recipeText'>").text(recipeingredientLines);
                        var image = $("<img>");//New image to store the recipe image
                        image.attr("src", recipeImage);

                         //Append the recipes informations in the newly created div
                        imageDiv.append(pRecipeTitle);
                        imageDiv.append(image);
                        imageDiv.append(pRecipeIngredients);
                  

                        //Display the recipes in the div
                        $("#foodPlace").append(imageDiv);
                        //$("#foodPlace").append( `<div><img src =${recipeImage}</img></div><div> <h2>${recipeTest}</h2> <p>${recipeingredientLines}</p><div>`);
                    }
                });
            }
            
            GetRecipe();
        }       
    });

    // this is the function that is going to display a fun cooking word
function GetFoodWord() {
    // storing all our words in an array
    var foodWords = ["al dente", "bisque", "canape", "flambe", "fricassee", "hors d'oeuvres", "julienne", "meuniere", "roux", "sous vide"];
    // creating a variable that will randomly pick a word (eventually to be incorporated in an onclick function)
    var randomItem = foodWords[Math.floor(Math.random() * foodWords.length)];
    var apiKey = "?key=afc7c827-8f7f-4a2e-9e2d-fe20474a337b";
    var queryURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + randomItem + apiKey;
    // logging this to get a better look at the JSON data
    console.log(queryURL);
  
    // ajax call to the API
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      // logging the response to make sure its working, next step is to get the desired data to display in a div
      console.log(response);
      // storing the words and definitions in variables
      var wordFromDictionary = response[0].hwi.hw;
      var definition = response[0].shortdef[0];
  
      // appends the foodWords div to display the word and definition
      $("#foodWords").html(`<h2 id = "headword"> ${wordFromDictionary}</h2> <p id ="definition"> ${definition}</p>`);
    //   $("#foodWords").append("<div>" + definition +  "</div>");
  
    });
  };
  
  GetFoodWord();
  setInterval(GetFoodWord, 7000);
    //Function to reset the informations displayed in the recipe holder
    function reset(){
        $("#foodPlace").empty();
        $("#recipeHolder").empty();
    }
    
});