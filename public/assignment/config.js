/**
 * Created by ChienliMa on 10/9/16.
 */
(function() {
    angular.module("myApp").config(Config);

    var routes = [
        ["/login",  "user/login.view.client.html", "default-style.css", "UserController"],
        ["/default",    "user/login.view.client.html", "default-style.css", "UserController"],
        ["/register",  "user/register.view.client.html", "default-style.css", "UserController"],
        ["/user/:uid",  "user/profile.view.client.html", "website-style.css", "UserController"],

        ["/user/:uid/website",  "website/website-list.view.client.html", "website-style.css", "WebsiteController"],
        ["/user/:uid/website/new",  "website/website-new.view.client.html", "website-style.css", "WebsiteController"],
        ["/user/:uid/website/:wid", "website/website-edit.view.client.html", "website-style.css", "WebsiteController"],

        ["/user/:uid/website/:wid/page",    "page/page-list.view.client.html", "page-style.css", "PageController"],
        ["/user/:uid/website/:wid/page/new",    "page/page-new.view.client.html", "page-style.css", "PageController"],
        ["/user/:uid/website/:wid/page/:pid",   "page/page-edit.view.client.html", "page-style.css", "PageController"],

        ["/user/:uid/website/:wid/page/:pid/widget",    "widget/widget-list.view.client.html", "widget-style.css", "WidgetController"],
        ["/user/:uid/website/:wid/page/:pid/widget/new",    "widget/widget-chooser.view.client.html", "widget-style.css", "WidgetController"],
        ["/user/:uid/website/:wid/page/:pid/widget/:wgid",  "widget/widget-edit.view.client.html", "widget-style.css", "WidgetController"]
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
                    css: "css/" + css});
        }
        $routeProvider.otherwise("/login");
    }
})();