/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    myApp.controller('LoginController', LoginController);
    function LoginController($rootScope, $location, UserService) {
        this.username = "";
        this.password = "";

        this.login = function(){
            UserService.findUserByCredentials(this.username, this.password)
                .then(
                    function (response){
                        var user = response.data;
                        if (user){
                            $rootScope.currentUser = user;
                            $location.path("/user/" + user._id);
                        } else {
                            alert("User not found");
                        }
                    });
        };
    }

    myApp.controller('RegisterController', RegisterController);
    function RegisterController($rootScope, $location, UserService) {

        this.username = "";
        this.password = "";
        this.confirm = "";

        this.register = function(){
            if(this.confirm != this.password){
                alert("Passwords didn't match.");
                return;
            }

            UserService
                .createUser({username:this.username, password:this.password})
                .then(
                    function(){
                        alert("Register succ");
                        $location.path("/login");
                    },
                    function(reason){
                        alert("Register fail:" + reason.toString());
                    });

            UserService
                .register(user)
                .then(
                    function(response) {
                        var user = response.data;
                        alert("Register succ");
                        $rootScope.currentUser = user;
                        $location.url("/user/"+user._id);
                    },
                    function(reason){
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
                        alert("saved successffully");
                    },
                    function(res){
                        alert("saved successffully");
                    }
                )

        };

        this.logout = function(){
            UserService
                .logout()
                .then(
                    function(res) {
                        $rootScope.currentUser = null;
                        $location.url("/");
                    })
        }

    }

})(window.angular);