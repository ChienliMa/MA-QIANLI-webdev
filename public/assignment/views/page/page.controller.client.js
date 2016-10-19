/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    myApp.controller('PageController', ['$scope','$routeParams', function($scope, $routeParams) {
        var uid = $routeParams.uid;
        var wid = $routeParams.wid;
        var pid = $routeParams.pid;

        $scope.pages= [{"name":"Onepage", "title":""},
            {"name":"Mypage", "title":""},
            {"name":"Yourpage", "title":""}];
    }]);
})(window.angular);