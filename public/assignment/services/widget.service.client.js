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
    app.factory("WidgetService", function(){
        var widgets =
            [
                { _id: "123", widgetType: "HEADER",     pageId: "321", size: 2, text: "GIZMODO"},
                { _id: "234", widgetType: "HEADER",     pageId: "321", size: 4, text: "Lorem ipsum"},
                { _id: "345", widgetType: "IMAGE",      pageId: "321", width: "100%",
                    url: "http://lorempixel.com/400/200/"},
                { _id: "456", widgetType: "HTML",       pageId: "321", text: "<p>Lorem ipsum</p>"},
                { _id: "567", widgetType: "HEADER",     pageId: "321", size: 4, text: "Lorem ipsum"},
                { _id: "678", widgetType: "YOUTUBE",    pageId: "321", width: "100%",
                    url: "https://youtu.be/AM2Ivdi9c4E" },
                { _id: "789", widgetType: "HTML",       pageId: "321", text: "<p>Lorem ipsum</p>"}
            ];

        return {
            //adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
            createWidget: function(pageId, widget){
                widget.pageId = pageId;
                widget._id = Date.now();
                widgets.push(widget);
            },

            //retrieves the widgets in local widgets array whose pageId matches the parameter pageId
            findWidgetsByPageId: function(pageId){
                return widgets.filter(function(x){return x.pageId == pageId;});
            },

            //retrieves the widget in local widgets array whose _id matches the widgetId parameter
            findWidgetById: function(widgetId){
                return widgets.filter(function(x){return x._id == widgetId;});
            },

            //updates the widget in local widgets array whose _id matches the widgetId parameter
            updateWidget: function(widgetId, widget){
                widgets = widgets.filter(function(x){return x._id == widgetId;});
                widget._id = widgetId;
                widgets.push(widget);
            },

            //removes the widget from local widgets array whose _id matches the widgetId parameter
            deleteWidget: function(widgetId){
                widgets = widgets.filter(function(x){return x._id == widgetId;});
            }
        };
    });
})();