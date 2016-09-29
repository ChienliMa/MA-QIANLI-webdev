/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    angular.module('myApp', []).controller('WebsiteController', function($scope) {
        $scope.websites= [{"name":"spotify"},
                            {"name":"medude"},
                            {"name":"dwidder"}];


    });
})(window.angular);