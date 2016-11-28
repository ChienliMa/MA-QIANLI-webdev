module.exports = function(model) {
    var Website = model.Website;
    var Page = model.Page;

    return {
        createWebsiteForUser : function(userId, website){
            website._user = userId;
            return Website.create(website);
        },

        findWebsitesByUser : function(userId){
            return Website.find({_user : userId});
        },

        findWebsiteById : function(websiteId){
            return Website.findOne({_id : websiteId});
        },

        updateWebsite : function(websiteId, website){
            return Website.findOneAndUpdate({_id : websiteId}, {$set : website}, {upsert: true, new : true},function(error){console.log(error);});
        },

        deleteWebsite : function(websiteId){
            Page.remove({_website:websiteId});
            return Website.findOneAndRemove({_id : websiteId});
        }
    }  
};





