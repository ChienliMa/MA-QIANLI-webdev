/**
 * Created by ChienliMa on 13/10/2016.
 */
/**
 * Created by ChienliMa on 10/9/16.
 */
(function() {
    var app = angular.module("myApp");

    // ================
    //   PAGE SERVICE
    // ================
    app.factory("PageService", function($http){

        return {
            // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
            createPage: function (websiteId, page){
                return $http.post("/api/website/"+websiteId.toString()+"/page", page);
            },

            // return all pages under given websiteID
            findPageByWebsiteId: function (websiteId){
                return $http.get("/api/website/"+websiteId.toString()+"/page");
            },

            // return first page with given pageId, if none, reutnr null
            findPageById: function (pageId){
                return $http.get("/api/page/"+pageId);
            },

            // updates the page in local pages array whose _id matches the pageId parameter
            updatePage: function (pageId, page){
                return $http.put("/api/page/"+pageId, page);
            },

            // removes the page from local pages array whose _id matches the pageId parameter
            deletePage: function (pageId){
                return $http.delete("/api/page/"+pageId);
            }
        };

    });

})();