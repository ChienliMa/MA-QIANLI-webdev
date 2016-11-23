module.exports = function() {
    var mongoose = require("mongoose");
    var PageSchema = require("./page.schema.server")();
    var Page = mongoose.model("Page", PageSchema);

    return {
        createPage : function(websiteId, page){
            page._website = websiteId;
            return Page.create(page);
        },

        findPagesByWebsite : function(websiteId){
            return Page.find({_website : websiteId});
        },

        findPageById : function(pageId){
            return Page.findOne({_id : pageId});
        },

        findPopulatedPageById : function(pageId){
            return Page
                .findOne({_id : pageId})
                .populate('widgets');
        },

        addWigetToPage : function(pid, wgid){
            Page.findByIdAndUpdate(
                pid,
                {$push: {"widgets": wgid}},
                {upsert: true, new : true},
                function(err, model) {}
            )
        },

        updatePage : function(pageId, page){
            return Page.findOneAndUpdate({_id : pageId}, page)
                .then(function(rval){res.sendStatus(200)});
        },

        deletePage : function(pageId){
            return Page.findOneAndRemove({_id : pageId});
        }
    }

};





