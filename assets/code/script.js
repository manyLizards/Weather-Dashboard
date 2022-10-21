//create initial variables from HTML
let input = document.querySelector("#user-input");
var searchBtn = document.querySelector("#search");
var searchHist = document.querySelector("#search-history");
var cityCurrent = document.querySelector("#city-current");
var forecast = document.querySelector("#five-day-forecast");

//create variables from weather server API
var APIKey = "f299a5114970c339b29accfb86e8b629"

//create function that goes in the search button eventlistener
function searchFunc (event) {
    event.preventDefault()
    input = input.value
    var coordinatesURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + input + "&limit=" + 1 + "&appid=" + APIKey
    //input goes to search history
    //current and future weather conditions are presented 
    fetch(coordinatesURL)
    .then (function(response) {
        console.log(response.json())
    })
}

//make search button search
searchBtn.addEventListener("click", searchFunc);