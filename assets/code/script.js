//create initial variables from HTML
let input = document.querySelector("#user-input").value;
var searchBtn = document.querySelector("#search");
var searchHist = document.querySelector("#search-history");
var cityCurrent = document.querySelector("#city-current");
var forecast = document.querySelector("#five-day-forecast");

//create variables from weather server API
var APIKey = "f299a5114970c339b29accfb86e8b629"
var weatherURL = "api.openweathermap.org/data/2.5/forecast?q=" + input.value + "&appid=" + APIKey

//create function that goes in the search button eventlistener
function searchFunc (event) {
    event.preventDefault()
    input = input.value
    console.log(input);
    //input goes to search history
    //current and future weather conditions are presented 
}

//make search button search
searchBtn.addEventListener("click", searchFunc)