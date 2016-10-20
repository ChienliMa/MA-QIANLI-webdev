/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    myApp.controller("PageListController", PageListController);
    function PageListController($scope, $routeParams, PageService){
        this.uid = $routeParams.uid.toString();
        this.wid = $routeParams.wid.toString();

        this.pages = PageService.findPageByWebsiteId(this.wid);
    };

    myApp.controller("NewPageController", NewPageController);
    function NewPageController($scope, $routeParams, $location, PageService){
        this.uid = $routeParams.uid.toString();
        this.wid = $routeParams.wid.toString();

        this.page = {name: "", websiteId: "", description: "", title: ""};

        this.newPage = function(){
            PageService.createPage(this.wid, angular.copy(this.page));
            $location.path("/user/" + this.uid + "/website/" + this.wid + "/page/");
        };
    };

    myApp.controller("EditPageController", EditPageController);
    function EditPageController($scope, $routeParams, $location, PageService){
        this.uid = $routeParams.uid.toString();
        this.wid = $routeParams.wid.toString();
        this.pid = $routeParams.pid.toString();

        this.page = PageService.findPageById(this.pid);

        this.update = function(){
            PageService.updatePage(this.pid, angular.copy(this.page));
            $location.path("/user/" + this.uid + "/website/" + this.wid + "/page/");
        };

        this.delete = function(){
            PageService.deletePage(this.pid);
            $location.path("/user/" + this.uid + "/website/" + this.wid + "/page/");
        };
    };
})(window.angular);