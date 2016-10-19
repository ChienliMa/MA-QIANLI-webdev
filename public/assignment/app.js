/**
 * Created by ChienliMa on 9/29/16.
 */

(function(angular) {
    'use strict';
    var myApp = angular.module('myApp', ["ngRoute", "angularCSS"]);

    myApp.filter("trustUrl", ['$sce', function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }]);
})(window.angular);