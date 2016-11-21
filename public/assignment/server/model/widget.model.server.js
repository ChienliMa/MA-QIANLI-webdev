module.exports = function(){
    var mongoose = require("mongoose");
    return mongoose.Schema({
        _user: { type: Number, ref: 'User' },
        name: String,
        description: String,
        pages: [{ type: Schema.Types.ObjectId, ref: 'Page' }],
        dateCreated: Date
    });

    return {
        createWidget : function(pageId, widget){

        },
        findAllWidgetsForPage : function(pageId){

        },
        findWidgetById : function(widgetId){

        },
        updateWidget : function(widgetId, widget){

        },
        deleteWidget : function(widgetId){

        }
    }
};