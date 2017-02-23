'use strict';

// Define the `main` module

// TODO: it needs to redo by using angular services
// workaround: for data communication between different modules
var _subscriberList = [];	
function subscribe(callback, scope){
	_subscriberList.push({callback, scope});
}
function notify(data){
	_subscriberList.forEach(function (props) { props.callback && props.callback.call(props.scope, data); });
}


// TODO: move this chart into weatherchart component
angular.module('weatherApp', ['chart.js']).controller("LineCtrl", function ($scope, $http) {

	subscribe(function(data){
		var labels = [];
    var highList = [];
    var lowList = [];
    //
    data.item.forecast.forEach(function(item){
    	labels.push(item.day);
    	highList.push(item.high);
    	lowList.push(item.low);
    }, this);
    //
    $scope.series = ['High', 'Low'];
    $scope.labels = labels;
	  $scope.data = [highList, lowList];
	}, this);

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
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

});