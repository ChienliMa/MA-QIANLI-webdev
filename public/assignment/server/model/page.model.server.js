module.exports = function () {
    var mongoose = require("mongoose");
    var Pages = mongoose.model("Page", PageSchema);

    return {
        createPage : function(websiteId, page){
            page.websiteId = websiteId;
            return Pages.create(page);
        },

        findAllPagesForWebsite : function(websiteId){
            return Pages.find({websiteId : websiteId});
        },

        findPageById : function(pageId){
            return Pages.findOne({_id : pageId});
        },

        updatePage : function(pageId, page){
            return Pages.findOneAndUpdate({_id : pageId}, page);
        },

        deletePage : function(pageId){
            return Pages.findOneAndRemove({_id : pageId});
        }
    }

};





