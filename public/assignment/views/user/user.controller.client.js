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
                $location.path("/user/" + found_user._id);
            }
        };
    };

    myApp.controller('RegisterController', RegisterController);
    function RegisterController($scope, $location, UserService) {
        this.username = "";
        this.password = "";
        this.confirm = "";

        this.register = function(){
            if(this.confirm != this.password){
                alert("Passwords didn't match.");
            }else if (!UserService.createUser({username:this.username, password:this.password})){
                alert("Occupied username.");
            } else {
                $location.path("/login");
            }
        };
    };

    myApp.controller('ProfileController', ProfileController);
    function ProfileController($scope, $routeParams, UserService){
        this.user = UserService.findUserById($routeParams.uid);
        this.update = function(){
            UserService.updateUser(this.user._id, this.user);
            this.user = UserService.findUserById($routeParams.uid);
        };

    };

})(window.angular);