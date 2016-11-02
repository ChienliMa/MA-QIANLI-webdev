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
        function success_handler(response){
            var user = response.data;
            if (user){
                $location.path("/user/" + user._id);
            } else {
                alert("User not found");
            }
        };

        this.login = function(){
            UserService.findUserByCredentials(this.username, this.password)
                .then(success_handler);
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
                return;
            }

            UserService
                .createUser({username:this.username, password:this.password})
                .then(
                    function(res){
                        alert("Register succ");
                        $location.path("/login");
                    },
                    function(reason){
                        alert("Register fail:" + reason.toString());

                    });
        };
    };

    myApp.controller('ProfileController', ProfileController);
    function ProfileController($scope, $routeParams, $location, UserService){
        var vm = this;
        vm.user = {};
        UserService.findUserById($routeParams.uid)
            .then(function(res){
                console.log(res.data);
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

    };

})(window.angular);