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


//Global variables
//Which variables will we need??


$(document).ready(function(){


//On Click event on the FindFood button.
//The click on this button will trigger 
$("#findFood").on("click", function(){

    //we put the value typed by the user (the ingredient for the recipe search)
    var foodIngredient = $("#food-input").val().trim();

    //Query to access the API website 
    //the parameter will be the value entered by the user
    var queryURL = "https://www.food2fork.com/api/search?key=6740d2e5100fbeb2e89ce579ed0828d4&q=" + foodIngredient;

    console.log(queryURL);

    //we use the ajax to access to the data returned by queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        //the qieryURL return an array of 30 objects. Each object is a recipe with information related to it
        //Since we are only displaying the first 5 elements, we put them in an array named resultsFive
        var resultsFive = response.slice(0,5);

        for (var i = 0; i < resultsFive.length; i++){
            //new div to display the recipe informations: tittle and link
            var recipeLinksHolder = $("<div class='recipeLink'>");

            var 
        }

    });

});

})