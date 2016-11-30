/**
 * Created by ChienliMa on 10/9/16.
 */
(function() {
    angular.module("myApp").config(Config);

    var routes = [
        ["/login",  "user/login.view.client.html", "default-style.css", "LoginController"],
        ["/default",    "user/login.view.client.html", "default-style.css", "LoginController"],
        ["/register",  "user/register.view.client.html", "default-style.css", "RegisterController"],
        ["/user",  "user/profile.view.client.html", "website-style.css", "ProfileController"],

        ["/user/:uid/website",  "website/website-list.view.client.html", "website-style.css", "WebsiteListController"],
        ["/user/:uid/website/new",  "website/website-new.view.client.html", "website-style.css", "NewWebsiteController"],
        ["/user/:uid/website/:wid", "website/website-edit.view.client.html", "website-style.css", "EditWebsiteController"],


        ["/user/:uid/website/:wid/page",    "page/page-list.view.client.html", "page-style.css", "PageListController"],
        ["/user/:uid/website/:wid/page/new",    "page/page-new.view.client.html", "page-style.css", "NewPageController"],
        ["/user/:uid/website/:wid/page/:pid",   "page/page-edit.view.client.html", "page-style.css", "EditPageController"],

        ["/user/:uid/website/:wid/page/:pid/widget",    "widget/widget-list.view.client.html", "widget-style.css", "WidgetListController"],
        ["/user/:uid/website/:wid/page/:pid/widget/new",    "widget/widget-choose.view.client.html", "widget-style.css", "WidgetChooseController"],
        ["/user/:uid/website/:wid/page/:pid/widget/:wgid/:wtype",  "widget/widget-edit.view.client.html", "widget-style.css", "EditWidgetController"]
    ];

    function Config($routeProvider) {
        var num_of_routes = routes.length;
        for (var i = 0; i < num_of_routes; i++) {
            var uri, view, css, ctler;
            uri = routes[i][0];
            view = routes[i][1];
            css = routes[i][2];
            ctler = routes[i][3];

            $routeProvider.when(uri,
                {templateUrl: "views/" + view,
                    controller: ctler,
                    controllerAs: "model",
                    css: "css/" + css});
        }

        $routeProvider.when ("/user/:uid", {
            templateUrl: "views/user/profile.view.client.html",
            controller: "ProfileController",
            controllerAs: "model",
            css: "css/website-style.css",
            resolve: { checkLogin :
                        function($q, $timeout, $http, $location, $rootScope) {
                            var deferred = $q.defer();
                            $http.get('/api/loggedin').then(function(res) {
                                var user = res.data;
                                $rootScope.errorMessage = null;
                                if (user != '0') {
                                    $rootScope.currentUser = user;
                                    deferred.resolve();
                                } else {
                                    deferred.reject();
                                    $location.url('/');
                                }
                            });
                            return deferred.promise;
                        }
                    }
        });

        $routeProvider.otherwise("/login");
    }
})();