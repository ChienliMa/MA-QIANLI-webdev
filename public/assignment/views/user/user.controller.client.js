/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    myApp.filter("trustUrl", ['$sce', function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }]);

    myApp.controller('UserController', ['$scope','$location', "UserService",function($scope, $location, UserService) {
        // check and add uid


        $scope.user = {id:"", password:"", email:"", firstname:"", lastname:""};
        $scope.confirm_password = "";

        var user = $scope.user;
        $scope.login = function(){
            if(!UserService.login(user.id, user.password)){
                alert("Username&Password pair not found.");
            } else {
                $location.path("/user/" + user.id);
            }
        };

        $scope.register = function(){
            if($scope.confirm_password != $scope.user.password){
                alert("Passwords didn't match.");
            }else if (!UserService.register(user.id, user.password)){
                alert("Occupied username.");
            } else {
                $location.path("/login");
            }
        };
    }]);

})(window.angular);