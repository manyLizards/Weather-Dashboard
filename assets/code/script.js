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
    console.log(input);
    var weatherURL = "api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=" + APIKey
    //input goes to search history
    //current and future weather conditions are presented 
    $.ajax({
        url: weatherURL,
        method: 'GET',
    }).then(function (response) {
        console.log('AjaxResponse: ' + response);
    })
}

//make search button search
searchBtn.addEventListener("click", searchFunc);