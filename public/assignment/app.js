/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    angular.module('myApp', []).controller('WebsiteController', function($scope) {


        $scope.websites= [{"name":"spotify", "desc":""},
                            {"name":"medude", "desc":""},
                            {"name":"dwidder", "desc":""}];

        $scope.addWebsite = function(website){
            console.log($scope.websites);
            $scope.websites.push(website);
            console.log($scope.websites);
        };
    });
})(window.angular);