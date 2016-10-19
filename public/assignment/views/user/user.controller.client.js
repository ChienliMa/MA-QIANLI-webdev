/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    myApp.controller('LoginController', LoginController)
    var LoginController = function($scope, $location, UserService) {
        if(!UserService.login(user.id, user.password)){
            alert("Username&Password pair not found.");
        } else {
            $location.path("/user/" + user.id);
        }
    };

    myApp.controller('RegisterController', RegisterController)
    var RegisterController = function($scope, $location, UserService) {
        if(!UserService.login(user.id, user.password)){
            alert("Username&Password pair not found.");
        } else {
            $location.path("/user/" + user.id);
        }
    };

    myApp.controller('ProfileController', ProfileController);
    var ProfileController = function($scope, $location, UserService){
        if($scope.confirm_password != $scope.user.password){
            alert("Passwords didn't match.");
        }else if (!UserService.register(user.id, user.password)){
            alert("Occupied username.");
        } else {
            $location.path("/login");
        }
    };

})(window.angular);