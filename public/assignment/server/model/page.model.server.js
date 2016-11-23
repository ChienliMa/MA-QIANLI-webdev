module.exports = function() {
    var mongoose = require("mongoose");
    var PageSchema = require("./page.schema.server")();
    var Page = mongoose.model("Page", PageSchema);

    return {
        createPage : function(websiteId, page){
            page.websiteId = websiteId;
            return Page.create(page);
        },

        findPagesByWebsite : function(websiteId){
            return Page.find({websiteId : websiteId});
        },

        findPageById : function(pageId){
            return Page.findOne({_id : pageId});
        },

        updatePage : function(pageId, page){
            return Page.findOneAndUpdate({_id : pageId}, page);
        },

        deletePage : function(pageId){
            return Page.findOneAndRemove({_id : pageId});
        }
    }

};





