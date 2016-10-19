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
                { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
                { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
                { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
            ]
        var timer

        return {
            // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
            createPage: function (websiteId, page){
                page.id = Date.now();
                pages.push(page);
            },

            // return all pages under given websiteID
            findPageByWebsiteId: function (websiteId){
                return pages.filter(function(x){x.websiteId == websiteId;});
            },

            // return first page with given pageId, if none, reutnr null
            findPageById: function (pageId){
                var rval = pages.filter(function(x){x._id == pageId;});
                return rval.length > 0 ? rval[0] : null;
            },

            // updates the page in local pages array whose _id matches the pageId parameter
            updatePage: function (pageId, page){
                pages.filter(function(x){x._id == pageId;})
                    .map(function(x){
                        x.name = page.name;
                        x.websiteId = page.websiteId;
                        x.description = page.description;
                    });
            },

            // removes the page from local pages array whose _id matches the pageId parameter
            deletePage: function (pageId){
                pages = page.filter(function(x){x._id != pageId;});
            }
        };

    });

})();