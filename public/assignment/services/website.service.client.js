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
                website._id = Date.now();
                websites.push(website);
            },

            // retrieves the websites in local websites array whose developerId matches the parameter userId
            findWebsitesByUser: function (userId){
                var rval = websites.filter(function(x){return x.developerId == userId;});
                return rval.length > 0 ? rval[0] : null;
            },

            // retrieves the website in local websites array whose _id matches the websiteId parameter
            findWebsiteById: function (websiteId){
                var rval = websites.filter(function(x){return x._id == websiteId;});
                return rval.length > 0 ? rval[0] : null;
            },

            // updates the website in local websites array whose _id matches the websiteId parameter
            updateWebsite: function (websiteId, website){
                websites.filter(function(x){return x._id == websiteId;})
                    ,map(function(x){
                        x.name = website.name;
                        x.developerId= website.developerId;
                    });
            },

            // removes the website from local websites array whose _id matches the websiteId parameter
            deleteWebsite: function (websiteId) {
                websites = websites.filter(function(x){return x._id != websiteId;});
            }
        };
    });

})();