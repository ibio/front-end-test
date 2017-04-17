# Angular JS little practice
This is an Angular JS (version 1) practice. 

Online Demo: http://us.ypseek.com/labs/2017/weather/

Run locally:
```
git clone https://github.com/ibio/front-end-test.git
cd front-end-test
npm install
```
Use any local http server to visit it.


## Main features:
* ajax json api to get Yahoo Weather Data
* responsive design (mobile friendly)
* angular chart


### Browser Compatibility:
* Chrome: Version 56.0.2924.87 (64-bit)
* Safari: Version 10.0.3 (12602.4.8)
* Firefox: 51.0.1 (64-bit)

## Instructions
+ Clone this repo [Done!]
+ Complete this exercise and submit either a zip of the solution or a link to a new repo [Done!]
+ Please incorporate the included `angular.min.js` (Angular 1.5.8) framework into your solution. All other choices of libraries, frameworks, etc. are up to you. [Done!]

## Requirements
+ Solution should be responsive [Done!]
+ Use the the included `weather.json` file as your datasource (sample data from [Yahoo's Weather API](https://developer.yahoo.com/weather/)) [Done!]
+ Show the "current" conditions for New York: [Done!]
  + Location (ie. New York, NY, USA)
  + Current weather description (ie. sunny)
  + Current temperature
  + Today's high temperature [I didn't find out the data]
  + Today's low temperature [I didn't find out the data]
+ Allow the user to toggle more data in the current conditions area: [Done!]
    + Wind Speed
    + Humidity
    + Pressure
    + Sunrise/Sunset Time
+ Show the 7 Day forecast as a multi-line chart (use any charting library you would like but it should be incorporated as an Angular Directive) [Done!]
  + Y axis should show the High and Low temperature as separate lines
  + X axis should show 7 days (starting with the "current" day)
  + The chart should have a tool tip that when activated shows: [Done!]
    + Day of the week
    + High temperature
    + Low temperature
    + Weather description (ie. Breezy) [I didn't find out how to modify tips of the charts for now, but it certainly can be done...]

+ __Bonus:__ Was this too easy? Want to make it a real app? Use the [Yahoo's Weather API](https://developer.yahoo.com/weather/) or [Open Weather API](https://openweathermap.org/api) with the default location set to New York, NY, and allow the user to change the location by zip code. [Done!]
