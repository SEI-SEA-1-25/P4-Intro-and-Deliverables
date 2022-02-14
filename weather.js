//!==============================
//*        GEO LOCATION
//!==============================

var x = document.getElementById("coordinate");
var y = document.getElementById("json");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerText = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerText =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;

  //Create query for the API.
  var latitude = "latitude=" + position.coords.latitude;
  var longitude = "&longitude=" + position.coords.longitude;
  var query = latitude + longitude + "&localityLanguage=en";

  const Http = new XMLHttpRequest();

  var bigdatacloud_api =
    "https://api.bigdatacloud.net/data/reverse-geocode-client?";

  bigdatacloud_api += query;

  Http.open("GET", bigdatacloud_api);
  Http.send();

  Http.onreadystatechange = (e) => {
    y.innerText += Http.responseText;
  };
  console.log(getLocation());
}

//?!     ===========================
//!                 Time
//?!     ===========================

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

console.log(formatAMPM(new Date()));

const time = formatAMPM(new Date());
const today = new Date();

const date =
  today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();



//?     ===========================
//!         Get Weather Info
//?     ===========================

let globalTemp;

// const ApiKey = process.env.MY_API_KEY;

let weather = {
  apiKey: "7a9e0d0b445ca1be17f7e626ad349281",
  fetchWeather: function(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey +
        "&units=imperial"
    )
      .then(response => {
        if (!response.ok) {
          console.log("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then(data => this.displayWeather(data));
  },
  //?     ===========================
  //!     Display Weather & Date Info
  //?     ===========================

  displayWeather: function(data) {
    const dateTime = date + " " + time + " ";
    console.log(today);
    console.log(date);
    console.log(time);
    console.log(dateTime);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(data.main);
    // temp = this.data.main.temp;
   

    //*     TEMPERATURE VARIATIONS
    let globalTemp = temp;
    // orange
    if (globalTemp > 80.0 && globalTemp < 90.0) {
      document.querySelector(".weather-bg").style.backgroundColor = "red";
      //
    } else if (globalTemp > 69.0 && globalTemp < 79.0) {
      document.querySelector(".weather-bg").style.backgroundColor = "darkorange";
    } else if (globalTemp > 59.0 && globalTemp < 69.1) {
      document.querySelector(".weather-bg").style.background = "GOLDENROD";
    } else if (globalTemp > 49.0 && globalTemp < 59.0) {
      document.querySelector(".weather-bg").style.backgroundColor = "lightblue";
    } else if (globalTemp > 39.0 && globalTemp < 49.0) {
      document.querySelector(".weather-bg").style.backgroundColor = "darkcyan";
    } else if (globalTemp > 29.0 && globalTemp < 39.0) {
      document.querySelector(".weather-bg").style.backgroundColor = "blue";
    } else if (globalTemp > 90.0) {
      document.querySelector(".weather-bg").style.backgroundColor = "blue";
    } else {
      document.querySelector(".weather-bg").style.backgroundColor = "darkblue";
    }

    document.querySelector(".city").innerText =
      name + "\n" + "\nAt:  " + time + "\ncurrent weather is\n";
    // document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    let tempVal = (document.querySelector(".temp").innerText = temp + "°F");
    console.log(tempVal);
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },

  search: function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};
weather.fetchWeather("san francisco");
document.querySelector(".search").addEventListener("click", function() {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
 console.log(globalTemp);

//?     ===========================
//!          unit conversion
//?     ===========================

//?      ===========================
//!            style change
//?      ===========================

//?      ===========================
//!           This attaches the
//!         click event listener
//!             to the button
//?      ===========================
