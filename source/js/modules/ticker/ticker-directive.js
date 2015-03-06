/**
 * This a the directive that can implement charts using D3
 */

define(['./module'], function (module) {
  'use strict';

  module.directive('tickerChart', function (d3Charts) {
    restrict: 'E',
    controller: 'TickerController',
    templateUrl: 'js/modules/ticker/ticker.html'
  });
});



