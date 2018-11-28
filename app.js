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
                var secondNum = 5;
                var appid = "ec426dec";
                var appkey = "93ae402db25814afafd557b63c007d31";
                var queryURL = "https://api.edamam.com/search?q="+search+"&from=" + firstNum + "&to=" + secondNum + "&app_id="+appid+"&app_key="+appkey;
                console.log(queryURL);

                $.ajax({
                    url: queryURL,
                    method: "GET",  
                }).then(function(response){
                    console.log(response);
                    var foods=response.hits;
                    for(var i = 0; i < foods.length ; i++){                                 
                        var recipeTest = response.hits[i].recipe.label;
                        var recipeingredientLines = response.hits[i].recipe.ingredientLines;
                        var recipeImage = response.hits[i].recipe.image;
    
                        console.log (recipeTest);
                        //Display the recipes into the div
                        $("#foodPlace").append( `<div><img src =${recipeImage}</img></div><div> <h2>${recipeTest}</h2> <p>${recipeingredientLines}</p><div>`);
                    }
                });
            }
            
            GetRecipe();
        }       
    });

    //Function to reset the informations displayed in the recipe holder
    function reset(){
        $("#foodPlace").empty();
        $("#recipeHolder").empty();
    }
    
});
