/**
 * Created by ChienliMa on 9/29/16.
 */



(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    myApp.directive('fileModel', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function(){
                    scope.$apply(function(){
                        console.log(scope);
                        modelSetter(scope.$parent.model, element[0].files[0]);
                    });
                });
            }
        };
    }]);

    var types =
        {
            "HEADER": ["size", "text"],
            "HTML":["text"],
            "IMAGE" :["width", "url"],
            "YOUTUBE":["width", "url"]
        };

    myApp.controller("WidgetChooseController", WidgetChooseController);
    function WidgetChooseController($scope, $routeParams, $location){
        var model = this;
        model.uid = $routeParams.uid.toString();
        model.wid = $routeParams.wid.toString();
        model.pid = $routeParams.pid.toString();

        model.types = types;

        model.newWidget = function(selected_type){
            $location.path("/user/" + model.uid
                + "/website/" + model.wid
                + "/page/" + model.pid
                + "/widget/" + "-1"
                + "/" + selected_type);
        };
    };

    myApp.controller("WidgetListController", WidgetListController);
    function WidgetListController($scope, $routeParams, WidgetService){
        var model = this;
        model.uid = $routeParams.uid.toString();
        model.wid = $routeParams.wid.toString();
        model.pid = $routeParams.pid.toString();

        WidgetService.findWidgetsByPageId(model.pid)
            .then(function(res){
                model.widgets = res.data;
            });
    };

    myApp.controller("EditWidgetController", EditWidgetController);
    function EditWidgetController($scope, $routeParams, $location, $sce, WidgetService){
        var model = this;
        model.uid = $routeParams.uid.toString();
        model.wid = $routeParams.wid.toString();
        model.pid = $routeParams.pid.toString();
        model.wgid = $routeParams.wgid.toString();
        model.type = $routeParams.wtype;
        model.types = types;

        if(model.wgid != "-1"){
            WidgetService.findWidgetById(model.wgid)
                .then(function(res) {
                    console.log(res.data);
                    model.widget = res.data;
                });
        } else {
            model.widget = {widgetType:model.type};
        }


        model.save = function(){
            if(model.wgid == "-1"){
                WidgetService.createWidget(model.pid, model.widget);
            } else {
                WidgetService.updateWidget(model.wgid, model.widget);
            }
            $location.path("/user/" + model.uid
                + "/website/" + model.wid
                + "/page/" + model.pid
                + "/widget");
        };

        model.delete = function(){
            WidgetService.deleteWidget(model.wgid);
            $location.path("/user/" + model.uid
                + "/website/" + model.wid
                + "/page/" + model.pid
                + "/widget");
        };

        model.uploadFile = function(){
            var file = model.file;
            WidgetService.uploadFileToUrl(file, "/api/upload")
                .then(function (res) {
                    model.widget.url = "http://"+$location.host()+":"+$location.port()+res.data;
                    model.widget.width = "100%";
                });
        };

        model.searchPhotos = function(searchTerm) {
            FlickrService
                .searchPhotos(searchTerm)
                .then(function(response) {
                    data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length - 1);
                    data = JSON.parse(data);
                    model.photos = data.photos;
                });
        };
    }
})(window.angular);