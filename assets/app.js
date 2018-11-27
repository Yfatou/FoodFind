// // //Javascript file


// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyDECKdlUUwWo_jL0z_teQaPLBcSiwqRcIs",
//   authDomain: "food-project-4b9c6.firebaseapp.com",
//   databaseURL: "https://food-project-4b9c6.firebaseio.com",
//   projectId: "food-project-4b9c6",
//   storageBucket: "food-project-4b9c6.appspot.com",
//   messagingSenderId: "103528475709"
//   };

// firebase.initializeApp(config);

// //Firebase database declaration
// var database = firebase.database();


// //Global variables
// //Which variables will we need??


// $(document).ready(function(){


// //On Click event on the FindFood button.
// //The click on this button will trigger 
// $("#findFood").on("click", function(){

//   //we put the value typed by the user (the ingredient for the recipe search)
//   var foodIngredient = $("#food-input").val().trim();

//   //Query to access the API website 
//   //the parameter will be the value entered by the user
//   var queryURL = "https://www.food2fork.com/api/search?key=6740d2e5100fbeb2e89ce579ed0828d4&q=" + foodIngredient;

//   console.log(queryURL);

//   //we use the ajax to access to the data returned by queryURL
//   $.ajax({
//       url: queryURL,
//       method: "GET"
//   }).then(function(response){
//       //the qieryURL return an array of 30 objects. Each object is a recipe with information related to it
//       //Since we are only displaying the first 5 elements, we put them in an array named resultsFive
//       var resultsFive = response.slice(0,5);

//       for (var i = 0; i < resultsFive.length; i++){
//           //new div to display the recipe informations: title and link
//           var recipeLinksHolder = $("<div class='recipeLink'>");
//           //store the ID of the recipe. We will need it to display 
//           var recipeID = resultsFive[i].recipe_id;
//           //store the title of the recipe
//           var recipeTitle = $("<p>").text(resultsFive[i].title);
//           //stores the link of the recipe
//           var recipeLink = $("<p>").text(resultsFive[i].source_url);

//           //append the recipe informations to the div
//           recipeLinksHolder.append(recipeID);
//           recipeLinksHolder.append(recipeTitle);
//           recipeLinksHolder.append(recipeLink);

//           //append the hole recipe to the recipe holder div
//           $("#recipeHolder").prepend(recipeLinksHolder);
//       }


//       //when the user click on a recipe link

//   });

// });
// var foodSubmit = $("#food-form").submit(function(e) { // change # to .
//   var searchTerms = $("#food-input").val(); // you should have #input_name
//   console.log("this is the usertext " + searchTerms);

//   $('#p').text(searchTerms); // text function takes value as parameter
//   e.preventDefault();  
//   function GetRecipe (){
//       var search = searchTerms;
//       var firstNum = 0;
//       var secondNum = 5;
//       var appid = "ec426dec";
//       var appkey = "93ae402db25814afafd557b63c007d31";
//       var queryURL = "https://api.edamam.com/search?q="+search+"&from=" + firstNum + "&to=" + secondNum + "&app_id="+appid+"&app_key="+appkey;
//       $.ajax({
//           url: queryURL,
//           method: "GET",  
//       }).then(function(response){
//           console.log(response);
//           var foods=response.hits;
//           for(var i = 0; i < foods.length ; i++){                                 
//           var recipeTest = response.hits[i].recipe.label;
//           var recipeingredientLines = response.hits[i].recipe.ingredientLines;

//           console.log (recipeTest);
//            $( "#foodPlace" ).append( `<div> <p>${recipeTest}</p> ${recipeingredientLines}<div>`);
//           }
//       });
//   }
//       // getFood();
//        GetRecipe();
// });

// })



// ryans code!
var foodWords = ["al dente", "bisque", "canape", "flambe", "fricassee", "hors d'oeuvres", "julienne", "meuniere", "roux", "sous vide"];
// var time = 10000;

// makeFoodWords function to print words from the array into the foodWords div
function makeFoodWords(foodWords, foodClass) {
  // for (var i = 0; i < foodWords.length; i++) {
  //   var foodWordsDiv = $("<div>");
  //   $("#foodWords").append(foodWordsDiv);
  //   foodWordsDiv.append(foodWords[i]);
  //   foodWordsDiv.addClass(foodClass);
  //   foodWordsDiv.attr("data-type", foodWords[i]);
  // };

  var randomItem = foodWords[Math.floor(Math.random() * foodWords.length)];
  $("#foodWords").append("<div>" + randomItem +  "</div>")
};

// calls makeFoodWords function
makeFoodWords(foodWords, "foodWordsClass");







// $(document).on("click", "#findFood", function(displayTerm){
//   // var foodWords = $(this).data("type");

//   var queryURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + foodWords + "?key=afc7c827-8f7f-4a2e-9e2d-fe20474a337b";
//   // AJAX call to get the JSON data
//   $.ajax({
//       url: queryURL,
//       method: "GET"
//   }).then(function(response){

//     for(var i=0;i<response.data.length;i++){
//       // create a div to later store our gifs inside of
//       var WordsDiv = $("<div>");

//       var word = response[0].hwi.hw;
//       // response.data[i].rating;

//       var wordDiv = $("<div id='foodWords'>").html("" + word);
//       // display the rating in the rating div
//       WordsDiv.prepend(wordDiv);
// console.log(word);



//     };

// displayTerm();









  // emilys code
// $(document).ready(function () {
//   usertext = "";
//   var shortDef= "";
//   var etm= "";
//   var term ="";
//   function getWord(){
//     usertext = $("#word-form").submit(function(e) { // change # to .
//       var usertext = $("#word-input").val(); // you should have #input_name
//       console.log("this is the usertext " + usertext);
//       getGIF(); 

//       $('#p').text(usertext); // text function takes value as parameter
//       e.preventDefault();  var queryURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + usertext + "?key=afc7c827-8f7f-4a2e-9e2d-fe20474a337b";
//       // Creating an AJAX call for the specific movie button being clicked
//       $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function(response){
//   console.log(response);
//   var shortDef= response[0].shortdef[0];
//   var etm= response[0].et;
//   var term = response[0].hwi.hw;