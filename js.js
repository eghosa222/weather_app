
//getting the search button
const searchButton = document.getElementById("search-button");
//getting input search
const cityInput = document.getElementById("city-search");
//paragraph element to display weather result
const weatherInfo = document.getElementById("w-result");

//api key
const apiKey = "9c3d99128f991353eacb261d7ee02a6a"; 

//weather getter function
function getWeather() {
  const city = cityInput.value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }
  //api url
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

  //fetch api implementation
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        //checking for status code
      if (data.cod === "404") {
        weatherInfo.innerHTML = "City not found!";
      } else {

        //getting weather variables
        console.log(data);
        const city = data.name;
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const speed = data.wind.speed

        //displaying results to html

        weatherInfo.innerHTML = `
    <h2>Weather in ${city}</h2>
    <p>Temperature: ${temp}°C</p>
    <p>Description: ${description}</p>
    <p>Wind speed: ${speed} m/s2</p>
  `;
      }
    })
    //error handling
    .catch((err)=>{
        weatherInfo.innerHTML=`<span id='error'>Ooppps!! Something went wrong : ${err} </span>`
    })
    ;
}