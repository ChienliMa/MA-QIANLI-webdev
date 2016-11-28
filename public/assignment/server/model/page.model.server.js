module.exports = function(model) {
    var Page = model.Page;
    var Widget = model.Widget;

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
            return Page.findOneAndUpdate({_id : pageId}, {$set: page}, {upsert: true, new : true});
        },

        deletePage : function(pageId){
            Widget.remove({_page:pageId});
            return Page.findOneAndRemove({_id : pageId});
        }
    }

};





