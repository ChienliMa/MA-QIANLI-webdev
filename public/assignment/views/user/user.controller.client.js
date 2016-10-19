/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    myApp.controller('LoginController', LoginController);
    function LoginController($scope, $location, UserService) {
        this.username = "";
        this.password = "";

        this.login = function(){
            var found_user = UserService.findUserByCredentials(this.username, this.password);
            if(!found_user){
                alert("Username&Password pair not found.");
            } else {
                $location.path("/user/" + found_user.id);
            }
        };
    };

    myApp.controller('RegisterController', RegisterController);
    function RegisterController($scope, $location, UserService) {
        this.username = "";
        this.password = "";

        this.register = function(){
            if($scope.confirm_password != $scope.user.password){
                alert("Passwords didn't match.");
            }else if (!UserService.register(user.id, user.password)){
                alert("Occupied username.");
            } else {
                $location.path("/login");
            }
        };

    };

    myApp.controller('ProfileController', ProfileController);
    function ProfileController($scope, $routeParams, UserService){
        this.user = UserService.findUserById($routeParams.userId);

        this.update = function(){

        };
    };

})(window.angular);