//?     ===========================
//!           Date & Time
//?     ===========================

// const today = new Date();

// const date =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

// const time =
//   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//?!     ===========================
//!         Convert Time To 12hr
//?!     ===========================

// let resultElmnt = document.querySelector(".result");
// //  let BtnEle = document.querySelector(".Btn");
// let hourElmnt, minuteElmnt;
// BtnEle.addEventListener("click", () => {
//   hourElmnt = document.querySelector(".hour").value;
//   minuteElmnt = document.querySelector(".minute").value;
//   if (
//     hourElmnt >= 0 &&
//     hourElmnt <= 24 &&
//     minuteElmnt >= 0 &&
//     minuteElmnt <= 60
//   ) {
//     let amOrPm = "AM";
//     if (hourElmnt > 12) amOrPm = "PM";
//     hourElmnt = hourElmnt % 12;
//     resultElmnt.innerText =
//       "TIME = " + hourElmnt + " : " + minuteElmnt + " " + amOrPm;
//   }
// });

//?     ===========================
//!         Get Weather Info
//?     ===========================

// let weather = {
//   apiKey: "7a9e0d0b445ca1be17f7e626ad349281",
//   fetchWeather: function (city) {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=" +
//         city +
//         "&appid=" +
//         this.apiKey +
//         "&units=imperial"
//     )
//       .then((response) => {
//         if (!response.ok) {
//           console.log("No weather found.");
//           throw new Error("No weather found.");
//         }
//         return response.json();
//       })
//       .then((data) => this.displayWeather(data));
//   },

//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|=====================|☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\
//!|   ⚡︎   ⚡︎   ⚡︎   |☠︎| Show Weather & Date |☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\
//?|   ⚡︎   ⚡︎   ⚡︎   |☠︎|=====================|☠︎|   ⚡︎   ⚡︎   ⚡︎   |?\\

function displayWeather(data) {
  const dateTime = date + " " + time;
  console.log(today);
  // console.log(date);
  // console.log(time);
  // console.log(dateTime);
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".city").innerText =
    "In  " + name + "\n\nOn  " + date + " / At  " + time;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  let tempVal = (document.querySelector(".temp").innerText = temp + "°F");
  // console.log(tempVal);
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind speed: " + speed + " mph";
  document.querySelector(".weather").classList.remove("loading");
  document.querySelector(".today").classList.remove("☣︎", today);
  // document.body.style.backgroundImage =
  //   "url('https://source.unsplash.com/1600x900/?" + name + "')";
}
function search() {
  this.fetchWeather(document.querySelector(".search-bar").value);
}
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
console.log(weather.fetchWeather("san francisco"));
weather.fetchWeather("san francisco");

//?     ===========================
//!          unit conversion
//?     ===========================

function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerText =
    (valNum - 273.15) * 1.8 + 32;
}

//?      ===========================
//!            style change
//?      ===========================

const changeBackground = document.getElementById("weatherUI");

function switchColor(tempVal) {
  const tempColor = document.getElementsByClassName("temp");
  //<!--!  NEEDS DYNAMIC VARIABLE USING CONDITIONS
  // console.log(temp);
  let temp = parseFloat(tempVal);
  let degree = tempColor[0].innerText;
  const climateColorCold = "blue";
  const climateColorWarm = "light-orange";
  const climateColorHot = "red";
  // console.log(degree);
  //<!-- if(tempColor.value ) -->

  console.log("Log Background Change functionality");
  changeBackground.style.backgroundColor = climateColorWarm;
}

//?      ===========================
//!           This attaches the
//!         click event listener
//!             to the button
//?      ===========================

changeBackground.addEventListener("change", switchColor);
