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

})();