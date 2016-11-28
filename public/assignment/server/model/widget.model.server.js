module.exports = function(model){
    var Widget = model.Widget;

    return {
        createWidget : function(pageId, widget){
            widget._page = pageId;
            return Widget.create(widget);
        },

        findWidgetsByPage : function(pageId){
            return Widget.find({_page : pageId});
        },

        findWidgetById : function(widgetId){
            return Widget.findOne({_id : widgetId});
        },

        updateWidget : function(widgetId, widget){
            widget.__v += 1;
            return Widget.findOneAndUpdate({_id : widgetId}, {$set : widget}, {upsert: true, new : true});
        },

        deleteWidget : function(widgetId){
            return Widget.findOneAndRemove({_id : widgetId});
        }
    }
};