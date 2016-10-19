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
                    if(users[i].username == user.username){
                        return false;
                    }
                }
                user._id = 1;
                users.push(user);
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
                for(var i = 0; i < users.length; i++){
                    if(user[i]._id == userId){
                        return ture;
                    }
                }
                return false;
            },

            // removes the user whose _id matches the userId parameter
            "deleteUser": function (userId) {
                uers = users.filter(function(x){return x._id != userId;})
            }
        };
    });


    // ===================
    //   WEBSITE SERVICE
    // ===================
    app.factory("WebsiteService", function(){
        var websites =
            [
                { _id: "123", name: "Facebook",    developerId: "456" },
                { _id: "234", name: "Tweeter",     developerId: "456" },
                { _id: "456", name: "Gizmodo",     developerId: "456" },
                { _id: "567", name: "Tic Tac Toe", developerId: "123" },
                { _id: "678", name: "Checkers",    developerId: "123" },
                { _id: "789", name: "Chess",       developerId: "234" }
            ];


        return {
            // adds the website parameter instance to the local websites array. The new website's developerId is set to the userId parameter' +
            createWebsite: function (userId, website){

            },

            // retrieves the websites in local websites array whose developerId matches the parameter userId
            findWebsitesByUser: function (userId){

            },

            // retrieves the website in local websites array whose _id matches the websiteId parameter
            findWebsiteById: function (websiteId){

            },

            // updates the website in local websites array whose _id matches the websiteId parameter
            updateWebsite: function (websiteId, website){

            },

            // removes the website from local websites array whose _id matches the websiteId parameter
            deleteWebsite: function (websiteId) {

            }
        };
    });


    // ================
    //   PAGE SERVICE
    // ================
    app.factory("PageService", function(){
        var pages =
            [
                { _id: "321", name: "Post 1", websiteId: "456" },
                { _id: "432", name: "Post 2", websiteId: "456" },
                { _id: "543", name: "Post 3", websiteId: "456" }
            ];

        return {
            // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
            createPage: function (websiteId, page){

            },

            // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
            findPageByWebsiteId: function (websiteId){

            },

            // retrieves the page in local pages array whose _id matches the pageId parameter
            findPageById: function (pageId){

            },

            // updates the page in local pages array whose _id matches the pageId parameter
            updatePage: function (pageId, page){

            },

            // removes the page from local pages array whose _id matches the pageId parameter
            deletePage: function (pageId){

            }
        };

    });


    // ==================
    //   WIDGET SERVICE
    // ==================
    app.factory("WidgetService", function(){
        return function(){

        };
    });
})();