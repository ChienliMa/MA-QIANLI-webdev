/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp', ["ngRoute", "angularCSS", "as.sortable", "textAngular"]);

    myApp.filter("trustAsRes", ['$sce', function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }]);

    myApp.filter("trustHTML", ['$sce', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        }
    }]);

    // myApp.directive("sortable", function(){
    //    function linker(scope, element, attributes) {
    //
    //    }
    //
    //    return {
    //        link: linker
    //    }
    // });

})(window.angular);