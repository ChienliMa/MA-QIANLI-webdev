/**
 * Created by ChienliMa on 10/9/16.
 */
(function() {
    angular.module("myApp", ["ngRoute"]).config(Config);

    var routes = [
        ["/login",  "views/user/login.view.client.html", ""],
        ["/default",    "login.view.client.html", ""],
        ["/register	",  "register.view.client.html", ""],
        ["/user/:uid",  "profile.view.client.html", ""],

        ["/user/:uid/website",  "website-list.view.client.html", "css/website-style.css"],
        ["/user/:uid/website/new",  "website-new.view.client.html", "css/website-style.css"],
        ["/user/:uid/website/:wid", "website-edit.view.client.html", "css/website-style.css"],

        ["/user/:uid/website/:wid/page",    "page-list.view.client.html", "css/page-style.css"],
        ["/user/:uid/website/:wid/page/new",    "page-new.view.client.html", "css/page-style.css"],
        ["/user/:uid/website/:wid/page/:pid",   "page-edit.view.client.html", "css/page-style.css"],

        ["/user/:uid/website/:wid/page/:pid/widget",    "widget-list.view.client.html", "css/widget-style.css"],
        ["/user/:uid/website/:wid/page/:pid/widget/new",    "widget-chooser.view.client.html", "css/widget-style.css"],
        ["/user/:uid/website/:wid/page/:pid/widget/:wgid",  "widget-edit.view.client.html", "css/widget-style.css"]
    ];

    function Config($routeProvider) {
        var num_of_routes = routes.length;
        for (var i = 0; i < num_of_routes; i++) {
            var uri, view, css;
            uri = routes[i][0];
            view = routes[i][1];
            css = routes[i][2];

            $routeProvider.when(uri, {templateUrl: view, css: [css],});
        }
        $routeProvider.otherwise("/login");
    }
})();