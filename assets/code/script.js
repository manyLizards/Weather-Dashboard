//create initial variables from HTML
var input = document.querySelector("#user-input");
var searchBtn = document.querySelector("#search");
var searchHist = document.querySelector("#search-history");
var cityCurrent = document.querySelector("#city-current");
var forecast = document.querySelector("#five-day-forecast");

//create variables from weather server API
var APIKey = "f299a5114970c339b29accfb86e8b629"
var weatherURL = "api.openweathermap.org/data/2.5/forecast?q=" + input.value + APIKey

//make search button search
searchBtn.addEventListener("click", searchFunc)

//create function that goes in the searchbutton eventlistener
function searchFunc () {
    console.log(input.innerText);
}