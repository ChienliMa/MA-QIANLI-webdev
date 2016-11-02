/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    myApp.controller("WebsiteListController", WebsiteListController);
    function WebsiteListController($scope, $routeParams, WebsiteService){
        var model = this;
        this.uid = $routeParams.uid.toString();
        WebsiteService.findWebsitesByUser(this.uid)
            .then(
                function(res){
                    model.websites = res.data;
                },
                function(res){
                    alert(res.data);
                }
            );
    };

    myApp.controller("NewWebsiteController", NewWebsiteController);
    function NewWebsiteController($scope, $routeParams,  $location, WebsiteService){
        var model = this;
        model.uid = $routeParams.uid.toString();

        function init(){
            WebsiteService.findWebsitesByUser(model.uid)
                .then(
                    function(res) {
                        model.websites = res.data;
                    },
                    function(res) {
                        alert(res.data);
                    }
                );
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
        var model = this;
        this.uid = $routeParams.uid.toString();
        this.wid = $routeParams.wid.toString();

        WebsiteService.findWebsitesByUser(this.uid)
            .then(function(res) {
                model.websites = res.data;
            });
        WebsiteService.findWebsiteById(this.wid)
            .then(function(res) {
                model.website = res.data;
                console.log(model.website);

            });

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

