/**
 * Created by ChienliMa on 13/10/2016.
 */
/**
 * Created by ChienliMa on 10/9/16.
 */
(function() {
    var app = angular.module("myApp");
    
    // ==================
    //   WIDGET SERVICE
    // ==================
    app.factory("WidgetService", function($http){

        return {
            //adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
            createWidget: function(pageId, widget){
                $http.post("/api/page/"+pageId+"/widget", widget);
            },

            //updates the widget in local widgets array whose _id matches the widgetId parameter
            updateWidget: function(widgetId, widget){
                $http.put("/api/widget/"+widgetId.toString(), widget);
            },

            //removes the widget from local widgets array whose _id matches the widgetId parameter
            deleteWidget: function(widgetId){
                $http.delete("/api/widget/"+widgetId.toString());
            },

            //retrieves the widgets in local widgets array whose pageId matches the parameter pageId
            findWidgetsByPageId: function(pageId){
                return $http.get("/api/page/"+pageId+"/widget");
            },

            //retrieves the widget in local widgets array whose _id matches the widgetId parameter
            findWidgetById: function(widgetId){
                return $http.get("/api/widget/"+widgetId);
            }
        };
    });
})();