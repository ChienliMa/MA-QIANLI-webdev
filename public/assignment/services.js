/**
 * Created by ChienliMa on 13/10/2016.
 */
/**
 * Created by ChienliMa on 10/9/16.
 */
(function() {
    var app = angular.module("myApp");

    app.factory("UserService", function(){
       var users = {"john" : "whtf",
                    "mad" : "really mad",
                    "lol" : "lol"}

       return {
            login : function login(id, pwd){
                return id in users && pwd == users[id];
            },

            register : function register(id, pwd){
                if(id in users){
                    return false;
                } else{
                    users[id] = pwd;
                    return true
                }
            }
       };
    });

    app.factory("WebsiteService", function(){
        return {

        };

    });

    app.factory("PageService", function(){
        return function(){

        };

    });

    app.factory("WidgetService", function(){
        return function(){

        };
    });
})();