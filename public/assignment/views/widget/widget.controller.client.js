/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp');

    myApp.controller('WidgetController', ['$scope','$routeParams', function($scope, $routeParams) {
        var uid = $routeParams.uid;
        var wid = $routeParams.wid;
        var pid = $routeParams.pid;

        $scope.TYPE = {HEADING:"heading", IMAGE:"image", YOUTUBE:"youtube"};

        $scope.HEADING_MEM = ["Name", "Text", "Size"];
        $scope.IMAGE_MEM = ["Name", "Text", "URL", "Width"];
        $scope.YOUTUBE_MEM = ["Name", "Text", "URL", "Width"];

        $scope.widgets = [{"type":$scope.TYPE.HEADING, "name":"heading", "content":"HELLO WORLD!"},
            {"type":$scope.TYPE.IMAGE, "name":"hello world", "content":"http://browningit.com/wp-content/uploads/2015/09/helloworld.gif"},
            {"type":$scope.TYPE.YOUTUBE, "name":"PPAP", "content":"https://www.youtube.com/embed/yygpgCFJFnA?html5=1"}];
    }]);
})(window.angular);