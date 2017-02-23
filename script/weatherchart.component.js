'use strict';

// http://jtblin.github.io/angular-chart.js/#reactive
// TODO: here needs to rethink. It's not working when move chart.js into this component

angular.module('weatherApp').component('weatherChart', {
  templateUrl: 'script/chart.template.html',

  controller: [
    function() {
      var self = this;
      //
      
      self.labels = ["January", "February", "March", "April", "May", "June", "July"];
      self.series = ['Series A', 'Series B'];
      self.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];
      self.onClick = function (points, evt) {
        console.log(points, evt);
      };
      self.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
      self.options = {
        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              position: 'left'
            },
            {
              id: 'y-axis-2',
              type: 'linear',
              display: true,
              position: 'right'
            }
          ]
        }
      };

      
    }
  ]

});
