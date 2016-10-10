/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp', ["ngRoute"]);

    myApp.filter("trustUrl", ['$sce', function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }]);

    myApp.controller('WebsiteController', function($scope) {
        $scope.websites= [{"name":"spotify", "desc":""},{"name":"spotify", "desc":""},{"name":"spotify", "desc":""},{"name":"spotify", "desc":""},{"name":"spotify", "desc":""},
                            {"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},{"name":"medude", "desc":""},
                            {"name":"dwidder", "desc":""}];

    });

    myApp.controller('PageController', function($scope) {
        $scope.pages= [{"name":"Onepage", "title":""},
            {"name":"Mypage", "title":""},
            {"name":"Yourpage", "title":""}];
    });

    myApp.controller('WidgetController', function($scope) {
        $scope.TYPE = {HEADING:"heading", IMAGE:"image", YOUTUBE:"youtube"};

        $scope.HEADING_MEM = ["Name", "Text", "Size"];
        $scope.IMAGE_MEM = ["Name", "Text", "URL", "Width"];
        $scope.YOUTUBE_MEM = ["Name", "Text", "URL", "Width"];

        $scope.widgets = [{"type":$scope.TYPE.HEADING, "name":"heading", "content":"HELLO WORLD!"},
                         {"type":$scope.TYPE.IMAGE, "name":"hello world", "content":"http://browningit.com/wp-content/uploads/2015/09/helloworld.gif"},
                         {"type":$scope.TYPE.YOUTUBE, "name":"PPAP", "content":"https://www.youtube.com/embed/yygpgCFJFnA?html5=1"}];
    });
})(window.angular);