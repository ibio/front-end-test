'use strict';

var _global = this;

angular.module('weatherApp').component('weatherInfo', {
  templateUrl: 'script/info.template.html',

  controller: ['$http',
    function($http) {
      var self = this;
      var urlBefore = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'
      var urlAfter = '")&format=json&env=store://datatables.org/alltableswithkeys';
      // default NY
      self.zipcode = '10011';
      self.isReplyDetailOpen = false;

      self.handleMoreDetail = function(){
        self.isReplyDetailOpen = !self.isReplyDetailOpen;
      }

      self.handleSearch = function(){
        console.log(self.zipcode);
        self.isReplyDetailOpen = false;
        $http.get(encodeURI(urlBefore + self.zipcode + urlAfter)).then(function(response) {
        // $http.get('res/weather.json').then(function(response) {
          var temp = response.data;
          temp = temp.query || {};
          temp = temp.results || {};
          temp = temp.channel || {};
          self.data = temp;
          // console.log(self.data);
          _global.notify(self.data);
        });
      }
      // default call
      self.handleSearch();
    }
  ]

});
