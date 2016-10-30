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
    app.factory("UserService", function(){

        return {
            // adds the user parameter instance to the local users array
            "createUser": function (user, $http) {
                $http.post("/api/user", user);
            },

            // returns the user in local users array whose _id matches the userId parameter
            "findUserById": function (userId, $http) {
                $http.get("/api/" + userId.toString());
            },

            // updates the user in local users array whose _id matches the userId parameter
            "updateUser": function (userId, user, $http) {
                $http.post("/api/" + userId, user);
            },

            // removes the user whose _id matches the userId parameter
            "deleteUser": function (userId, $http) {
                $http.delete("/api/" + userId);
            },

            // returns the user in local users array whose username matches the parameter username
            "findUserByUsername": function (username, $http) {
                return $http.get(" /api/user?username="+username);
            },

            // returns the user whose username and password match the username and password parameters
            "findUserByCredentials": function (username, password, $http) {
                return $http.get(" /api/user?username="+username+"&"+"password="+password);
            }
        };
    });

})();