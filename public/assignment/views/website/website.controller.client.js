/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp', ["ngRoute", "angularCSS"]);

    myApp.controller('WebsiteController', ['$scope','$routeParams', function($scope, $routeParams) {
        var uid = $routeParams.uid;
        var wid = $routeParams.wid;
        var pid = $routeParams.pid;

        $scope.websites= [{"name":"spotify", "desc":""},
            {"name":"medude", "desc":""},
            {"name":"dwidder", "desc":""}];

    }]);
})(window.angular);