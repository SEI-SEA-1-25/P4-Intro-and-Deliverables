import axios from "axios";
const express = require("express");

const options = {
  method: "GET",
  url: "https://community-open-weather-map.p.rapidapi.com/weather",
  params: {
    q: "London,uk",
    lat: "0",
    lon: "0",
    callback: "test",
    id: "2172797",
    lang: "null",
    units: '"metric" or "imperial"',
    mode: "xml, html",
  },
  headers: {
    "x-rapidapi-key": "d5780d7757msh7c61b742690e076p1596bbjsn7ad45870345d",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
  },
};
console.log(options());
options();
axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
module.exports = optons;
