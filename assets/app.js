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




function GetFoodWord() {
  var foodWords = ["al dente", "bisque", "canape", "flambe", "fricassee", "hors d'oeuvres", "julienne", "meuniere", "roux", "sous vide"];
  var randomItem = foodWords[Math.floor(Math.random() * foodWords.length)];
  var apiKey = "?key=afc7c827-8f7f-4a2e-9e2d-fe20474a337b";
  var queryURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + randomItem + apiKey;
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    //The 5 recipes that we will display are stocked in a variable arrar
    var foods = response.hits;
    for (var i = 0; i < foods.length; i++) {
      var recipeTest = response.hits[i].recipe.label;//Title of the recipe
      var recipeingredientLines = response.hits[i].recipe.ingredientLines;//Recipe ingredients
      var recipeImage = response.hits[i].recipe.image;//Recipe image

      var imageDiv = $("<div class='imageDisplay'>");//We create a new div to display the recipe image
      var pRecipeTitle = $("<h2>").text(recipeTest);
      var pRecipeIngredients = $("<p>").text(recipeingredientLines);
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

GetFoodWord();      


//Function to reset the informations displayed in the recipe holder
function reset() {
  $("#foodPlace").empty();
  $("#recipeHolder").empty();
}











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