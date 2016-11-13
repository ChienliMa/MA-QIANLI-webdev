/**
 * Created by ChienliMa on 13/11/2016.
 */

(function() {
    var app = angular.module("myApp");

    // ================
    //   PAGE SERVICE
    // ================
    app.factory("FlickrService", function($http){
        var key = "94769b2e140bb0d2181805eee4b8a3af";
        var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT&per_page=9";


        return {
            // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
            searchPhotos: function (searchTerm){
                var url = urlBase.replace("API_KEY", key).replace("TEXT", searchTerm);
                return $http.get(url);
            }
        };
    });

})();