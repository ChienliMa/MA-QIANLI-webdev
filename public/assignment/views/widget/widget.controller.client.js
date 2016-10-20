/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    var types =
        {
            "HEADER": ["size", "text"],
            "HTML":["text"],
            "IMAGE" :["width", "url"],
            "YOUTUBE":["width", "url"]
        };

    myApp.controller("WidgetChooseController", WidgetChooseController);
    function WidgetChooseController($scope, $routeParams, $location){
        this.uid = $routeParams.uid.toString();
        this.wid = $routeParams.wid.toString();
        this.pid = $routeParams.pid.toString();

        this.types = types;

        this.newWidget = function(selected_type){
            $location.path("/user/" + this.uid
                + "/website/" + this.wid
                + "/page/" + this.pid
                + "/widget/" + "-1"
                + "/" + selected_type);
        };
    };

    myApp.controller("WidgetListController", WidgetListController);
    function WidgetListController($scope, $routeParams, WidgetService){
        this.uid = $routeParams.uid.toString();
        this.wid = $routeParams.wid.toString();
        this.pid = $routeParams.pid.toString();

        this.widgets = WidgetService.findWidgetsByPageId(this.pid);
    };

    myApp.controller("EditWidgetController", EditWidgetController);
    function EditWidgetController($scope, $routeParams, $location, WidgetService){
        this.uid = $routeParams.uid.toString();
        this.wid = $routeParams.wid.toString();
        this.pid = $routeParams.pid.toString();
        this.wgid = $routeParams.wgid.toString();
        this.type = $routeParams.wtype;
        this.types = types;
        if(this.wgid != "-1"){
            this.widget = WidgetService.findWidgetById(this.wgid);
        } else {
            this.widget = {widgetType:this.type};
        }


        var model= this;

        this.save = function(){
            if(model.wgid == "-1"){
                WidgetService.createWidget(model.pid, model.widget);
            } else {
                WidgetService.updateWidget(model.wgid, model.widget);
            }
            $location.path("/user/" + this.uid
                + "/website/" + this.wid
                + "/page/" + this.pid
                + "/widget");
        };

        this.delete = function(){
            WidgetService.deleteWidget(this.wgid);
            $location.path("/user/" + this.uid
                + "/website/" + this.wid
                + "/page/" + this.pid
                + "/widget");
        };
    };
})(window.angular);