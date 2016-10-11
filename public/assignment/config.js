/**
 * Created by ChienliMa on 10/9/16.
 */
(function() {
    angular.module("myApp", ["ngRoute", 'angularCSS']).config(Config);

    var routes = [
        ["/login",  "user/login.view.client.html", "default-style.css"],
        ["/default",    "user/login.view.client.html", "default-style.css"],
        ["/register",  "user/register.view.client.html", "default-style.css"],
        ["/user/:uid",  "user/profile.view.client.html", "website-style.css"],

        ["/user/:uid/website",  "website/website-list.view.client.html", "website-style.css"],
        ["/user/:uid/website/new",  "website/website-new.view.client.html", "website-style.css"],
        ["/user/:uid/website/:wid", "website/website-edit.view.client.html", "website-style.css"],

        ["/user/:uid/website/:wid/page",    "page/page-list.view.client.html", "page-style.css"],
        ["/user/:uid/website/:wid/page/new",    "page/page-new.view.client.html", "page-style.css"],
        ["/user/:uid/website/:wid/page/:pid",   "page/page-edit.view.client.html", "page-style.css"],

        ["/user/:uid/website/:wid/page/:pid/widget",    "widget/widget-list.view.client.html", "widget-style.css"],
        ["/user/:uid/website/:wid/page/:pid/widget/new",    "widget/widget-chooser.view.client.html", "widget-style.css"],
        ["/user/:uid/website/:wid/page/:pid/widget/:wgid",  "widget/widget-edit.view.client.html", "widget-style.css"]
    ];

    function Config($routeProvider) {
        var num_of_routes = routes.length;
        for (var i = 0; i < num_of_routes; i++) {
            var uri, view, css;
            uri = routes[i][0];
            view = routes[i][1];
            css = routes[i][2];

            $routeProvider.when(uri,
                {templateUrl: "views/" + view,
                    css: "css/" + css});
        }
        $routeProvider.otherwise("/login");
    }
})();