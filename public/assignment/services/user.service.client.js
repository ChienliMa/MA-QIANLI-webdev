/**
 * Created by ChienliMa on 13/10/2016.
 */
/**
 * Created by ChienliMa on 10/9/16.
 */
(function() {
    var app = angular.module("myApp");

    // ================
    //   USER SERVICE
    // ================
    app.factory("UserService", function($http){
        return {
            // login with session enabled
            "login" : function (user) {
                return $http.post("/api/login", user);
            },

            // logout the user session
            "logout" : function (user) {
                return $http.post("/api/logout");
            },

            // register with sesson
            "register" : function (user) {
                console.log("wtf");
                return $http.post("/api/register", user);
            },

            // adds the user parameter instance to the local users array
            "createUser": function (user) {
                return $http.post("/api/user", user);
            },

            // returns the user in local users array whose _id matches the userId parameter
            "findUserById": function (userId) {
                return $http.get("/api/user/" + userId);
            },

            // updates the user in local users array whose _id matches the userId parameter
            "updateUser": function (userId, user) {
                return $http.put("/api/user/" + userId, user);
            },

            // removes the user whose _id matches the userId parameter
            "deleteUser": function (userId) {
                $http.delete("/api/user/" + userId);
            },

            // returns the user in local users array whose username matches the parameter username
            "findUserByUsername": function (username) {
                return $http.get(" /api/user?username="+username);
            },

            // returns the user whose username and password match the username and password parameters
            "findUserByCredentials": function (username, password) {
                return $http.get("/api/user?username="+username+"&"+"password="+password);
            }
        };
    });

})();