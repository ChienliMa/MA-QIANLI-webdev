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
    function EditWidgetController($scope, $routeParams, $location, WidgetService){
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
    };
})(window.angular);