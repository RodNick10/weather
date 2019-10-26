//var cityList = document.querySelectorAll("#cityList");
//console.log(cityList);
var cityInput;
console.log("city input outside function:", cityInput);
var addListBtn = document.querySelector("#btnsearch");

var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  cityInput +
  "&units=imperial&appid=2056ddd78c803867452b0099fa63ea35";
//var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + '&units=imperial&appid=2056ddd78c803867452b0099fa63ea35' + APIKey;

addListBtn.addEventListener("click", function() {
  cityInput = document.getElementById("search").value;
  console.log("city input is:", cityInput);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var cityName = $("#cityName").text(response.name);
    var temperature = $("#temperature").text(
      "Temperature is" + response.main.temperature
    );
    var humityValue = $("#humidity").text(
      "Humidity is" + response.main.temperature
    );
    var wind = $("#wind").text("Wind speed is" + response.main.temperature);
    var uv = $("#uv").text("UV index is" + response.main.temperature);
  });
  const cityList = document.querySelector("#cityList");
  const newLi = document.createElement("li");
  cityList.prepend(newLi);
  newLi.classList.add("list-group-item");
  const liContent = document.createTextNode(cityInput);
  console.log(liContent);
  newLi.appendChild(liContent);
});

//var city = $("#search")

//var btnsearch = $("#btnsearch")

//$(document).ready(function(){
//$("#btnsearch").click(function(){
//$("#search").attr('class', "list-group-item")
//$("seatch")prepend(<li>""</li>)
//})
//})

//[OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions
//keys:

//var movie = "Mr. Nobody";
//var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

//$.ajax({
//url: queryURL,
//method: "GET"
//}).then(function(response) {
// Create a new table row element
//var tRow = $("<tr>");

// Methods run on jQuery selectors return the selector they we run on
// This is why we can create and save a reference to a td in the same statement we update its text
//var titleTd = $("<td>").text(response.Title);
//var yearTd = $("<td>").text(response.Year);
//var actorsTd = $("<td>").text(response.Actors);

// Append the newly created table data to the table row
// tRow.append(titleTd, yearTd, actorsTd);
// Append the table row to the table body
//$("tbody").append(tRow);

//var searchedCitiesList = document.querySelector('#searchedCities');

//searchBtn.addEventListener('click', function(event) {
//event.preventDefault();
//var searchedCity = document.querySelector('#searchedCity').value;
//var resultCity = document.createElement('li');
//resultCity.setAttribute('class', 'collection-item');
//resultCity.append(searchedCity);
//searchedCitiesList.append(resultCity);
