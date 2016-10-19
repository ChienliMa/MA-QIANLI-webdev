/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    myApp.controller("WebsiteListController", WebsiteListController);
    function WebsiteListController($scope, $routeParams, WebsiteService){
        this.websites = WebsiteService.findWebsitesByUser($routeParams.uid.toString());
        alert(this.websites)
    };

    myApp.controller("NewWebsiteController", NewWebsiteController);
    function NewWebsiteController($scope, $routeParams){

    };

    myApp.controller("EditWebsiteController", EditWebsiteController);
    function EditWebsiteController($scope, $routeParams){

    };
})(window.angular);