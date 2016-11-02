/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    myApp.controller("PageListController", PageListController);
    function PageListController($scope, $routeParams, PageService){
        var model = this;
        model.uid = $routeParams.uid.toString();
        model.wid = $routeParams.wid.toString();

        PageService.findPageByWebsiteId(this.wid)
            .then(function(res) {
                model.pages = res.data;
            });
    };


    myApp.controller("NewPageController", NewPageController);
    function NewPageController($scope, $routeParams, $location, PageService){
        var model = this;

        model.uid = $routeParams.uid.toString();
        model.wid = $routeParams.wid.toString();

        model.page = {name: "", websiteId: "", description: "", title: ""};

        model.newPage = function(){
            PageService.createPage(model.wid, angular.copy(model.page))
                .then(function(res) {
                    $location.path("/user/" + model.uid + "/website/" + model.wid + "/page/");
                },
                function(res) {
                    alert("Operation fail:" + res.data);
                });

        };
    };


    myApp.controller("EditPageController", EditPageController);
    function EditPageController($scope, $routeParams, $location, PageService){
        var model = this;
        model.uid = $routeParams.uid.toString();
        model.wid = $routeParams.wid.toString();
        model.pid = $routeParams.pid.toString();

        PageService.findPageById(this.pid)
            .then(function(res){
                model.page = res.data;
            });

        model.update = function(){
            PageService.updatePage(model.pid, angular.copy(model.page))
                .then(function(res){
                    $location.path("/user/" + model.uid + "/website/" + model.wid + "/page/");
                },
                function(res){
                    alert("Operation fail.");
                });
        };

        model.delete = function(){
            PageService.deletePage(model.pid)
                .then(function(res){
                    $location.path("/user/" + model.uid + "/website/" + model.wid + "/page/");
                },
                function(res){
                    alert("Operation Fail");
                });

        };
    };
})(window.angular);