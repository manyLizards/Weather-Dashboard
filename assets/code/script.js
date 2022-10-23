//create initial variables from HTML
let input = document.querySelector("#user-input");
var searchBtn = document.querySelector("#search");
var searchHist = document.querySelector("#search-history");
var cityCurrent = document.querySelector("#city-current");
var forecast = document.querySelector("#five-day-forecast");
var currentParamenters = document.querySelector("#current-parameters");

//create variable for API key
var APIKey = "f299a5114970c339b29accfb86e8b629"

//create function that goes in the search button eventlistener
function searchFunc (event) {
    event.preventDefault()
    input = input.value
    //create variable for weather api url
    var coordinatesURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&cnt=40&appid=" + APIKey

    //input goes to search history

    //current and future weather conditions are presented 
    fetch(coordinatesURL)
    .then (function(response) {
        if (response.ok) {
            response.json()
            .then (function(data) {
                console.log(data)

                //add city name
                var cityName = document.createElement("h2");
                cityName.innerHTML = data.city.name
                cityCurrent.appendChild(cityName);

                //add date
                var date = 
                document.createElement("h3");
                cityName.appendChild(date);
                date.innerHTML = data.list[0].dt_txt

                //add icon representation of weather conditions
                var icon = document.createElement("img");

                //add temperature
                var temp = document.createElement("li")
                currentParamenters.appendChild(temp)
                temp.innerHTML = data.list[0].main.temp

                //add humidity
                var humidity = document.createElement("li")
                currentParamenters.appendChild(humidity)
                humidity.innerHTML = data.list[0].main.humidity

                //add wind speed
                var windSpeed = document.createElement("li")
                currentParamenters.appendChild(windSpeed)
                windSpeed.innerHTML = data.list[0].wind.speed
            })
        }
    }
)}

//make search button search
searchBtn.addEventListener("click", searchFunc);