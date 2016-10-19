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
        // what is user please........
        var users =
            [
                {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
                {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
                {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
                {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
            ];

        return {
            // adds the user parameter instance to the local users array
            "createUser": function (user) {
                for(var i = 0; i < users.length;i++){
                    if(users[i].username == user.username){return false;}
                }
                user._id = Date.now();
                users.push(user);
                return true;
            },

            // returns the user in local users array whose _id matches the userId parameter
            "findUserById": function (userId) {
                var rval = users.filter(function(x){return x._id == userId;});
                return rval.length > 0 ? rval[0] : null;
            },

            // returns the user in local users array whose username matches the parameter username
            "findUserByUsername": function (username) {
                var rval = users.filter(function(x){return x.username == username;});
                return rval.length > 0 ? rval[0] : null;
            },

            // returns the user whose username and password match the username and password parameters
            "findUserByCredentials": function (username, password) {
                var rval = users.filter(function(x){return x.username == username && x.password == password;});
                return rval.length > 0 ? rval[0] : null;
            },

            // updates the user in local users array whose _id matches the userId parameter
            "updateUser": function (userId, user) {
                users.filter(function(x){return x._id == userId;})
                    .map(function(x){
                        x.username = user.username;
                        x.password = user.password;
                        x.firstname = user.firstname;
                        x.lastname = user.lastname;
                    });
            },

            // removes the user whose _id matches the userId parameter
            "deleteUser": function (userId) {
                users = users.filter(function(x){return x._id != userId;})
            }
        };
    });

})();