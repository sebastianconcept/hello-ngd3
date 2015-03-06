/**
 * This controller uses D3
 */

define(['./module'], function (module) {
  'use strict';

  module.controller('ChartController', function ($scope) {
    $scope.initialize = function() {
    	$scope.drawHelloD3();
    };

    $scope.drawHelloD3 = function () {
		d3.select("body").append("span")
			.text("Yo D3 world!");
    };

    $scope.initialize();
  });
});



