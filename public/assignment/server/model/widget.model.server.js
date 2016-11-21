module.exports = function(){
    var mongoose = require("mongoose");
    var Widgets = mongoose.model("Widget", WidgetSchema);


    return {
        createWidget : function(pageId, widget){
            widget.pageId = pageId;
            return Widgets.create(widget);
        },

        findAllWidgetsForPage : function(pageId){
            return Widgets.find({pageId : pageId});
        },

        findWidgetById : function(widgetId){
            return Widgets.findOne({_id : widgetId});
        },

        updateWidget : function(widgetId, widget){
            return Widgets.findOneAndUpdate({_id : widgetId}, widget);
        },

        deleteWidget : function(widgetId){
            return Widgets.findOneAndRemove({_id : widgetId});
        }
    }
};