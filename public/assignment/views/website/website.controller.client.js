/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    myApp.controller("WebsiteListController", WebsiteListController);
    function WebsiteListController($scope, $routeParams, WebsiteService){
        this.uid = $routeParams.uid.toString();
        this.websites = WebsiteService.findWebsitesByUser($routeParams.uid.toString());
    };

    myApp.controller("NewWebsiteController", NewWebsiteController);
    function NewWebsiteController($scope, $routeParams,  $location, WebsiteService){
        var model = this;
        model.uid = $routeParams.uid.toString();

        function init(){
            model.websites = WebsiteService.findWebsitesByUser(model.uid);
            model.website = {name:"", description:""};
        }
        init();
        this.init = init();

        this.newWebsite = function(){
            WebsiteService.createWebsite(model.uid, angular.copy(model.website));
            $location.path("/user/" + model.uid + "/website");

        };
    };

    myApp.controller("EditWebsiteController", EditWebsiteController);
    function EditWebsiteController($scope, $routeParams, $location, WebsiteService){
        this.uid = $routeParams.uid.toString();
        this.wid = $routeParams.wid.toString();

        this.websites = WebsiteService.findWebsitesByUser(this.uid);
        this.website = WebsiteService.findWebsiteById(this.wid)

        this.update = function(){
            WebsiteService.updateWebsite(this.wid, angular.copy(this.website));
            $location.path("/user/" + this.uid + "/website");
        };

        this.delete = function(){
            WebsiteService.deleteWebsite(this.wid);
            $location.path("/user/" + this.uid + "/website");
        };

    };
})(window.angular);

