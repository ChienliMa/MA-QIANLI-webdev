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
    app.factory("WebsiteService", function($http){

        return {
            // adds the website parameter instance to the local websites array. The new website's developerId is set to the userId parameter' +
            createWebsite: function (userId, website){
                return $http.post("/api/user/"+userId+"/website", website);
            },

            // updates the website in local websites array whose _id matches the websiteId parameter
            updateWebsite: function (websiteId, website){
                return $http.put("/api/website/"+websiteId.toString(), website);
            },

            // removes the website from local websites array whose _id matches the websiteId parameter
            deleteWebsite: function (websiteId) {
                return $http.delete("/api/website/"+websiteId.toString());
            },

            // retrieves the websites in local websites array whose developerId matches the parameter userId
            findWebsitesByUser: function (userId){
                return $http.get("/api/user/"+userId+"/website");
            },

            // retrieves the website in local websites array whose _id matches the websiteId parameter
            findWebsiteById: function (websiteId){
                return $http.get("/api/website/"+websiteId);
            }
        };
    });

})();