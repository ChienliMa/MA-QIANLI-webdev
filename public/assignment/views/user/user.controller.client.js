/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    myApp.controller('LoginController', LoginController);
    function LoginController($rootScope, $location, UserService) {
        this.user = {username : "", password : ""};

        this.login = function(){
            UserService.login(this.user)
                .then(
                    function (response){
                        var user = response.data;
                        if (user){
                            $rootScope.currentUser = user;
                            $location.path("/user/" + user._id);
                        } else {
                            alert("Invalid username & password pair.");
                        }
                    });
        };
    }

    myApp.controller('RegisterController', RegisterController);
    function RegisterController($rootScope, $location, UserService) {
        this.user = {username: "", password:""};
        this.confirm = "";

        this.register = function(){
            if(this.confirm != this.user.password){
                alert("Passwords didn't match.");
                return;
            }

            UserService
                .register(this.user)
                .then(
                    function(res) {
                        var user = res.data;
                        $rootScope.currentUser = user;
                        $location.path("/user/"+user._id);
                        alert("Register success. Now redirect to profile page.");
                    },
                    function(reason){
                        $location.path("/register");
                        alert("Register fail:" + reason.toString());
                    });
        };
    }

    myApp.controller('ProfileController', ProfileController);
    function ProfileController($rootScope, $routeParams, $location, UserService){
        var vm = this;
        vm.user = {};
        UserService.findUserById($routeParams.uid)
            .then(function(res){
                vm.user = res.data;
            });

        this.update = function(){
            UserService.updateUser(this.user._id, this.user)
                .then(
                    function(res){
                        alert("update success");
                    },
                    function(res){
                        alert("update failed");
                    }
                )

        };

        this.logout = function(){
            UserService
                .logout()
                .then(
                    function(res) {
                        $rootScope.currentUser = null;
                        $location.path("/login");
                    })
        }
    }

})(window.angular);