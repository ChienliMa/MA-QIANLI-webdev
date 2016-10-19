/**
 * Created by ChienliMa on 13/10/2016.
 */
/**
 * Created by ChienliMa on 10/9/16.
 */
(function() {
    var app = angular.module("myApp");

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

})();