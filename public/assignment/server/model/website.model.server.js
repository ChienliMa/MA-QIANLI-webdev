module.exports = function() {
    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var Websites = mongoose.model("Website", WebsiteSchema);

    return {
        createWebsiteForUser : function(userId, website){
            website.userId = userId;
            return Websites.create(website);
        },

        findAllWebsitesForUser : function(userId){
            return Websites.find({userId:userId});

        },
        findWebsiteById : function(websiteId){
            return Websites.findOne({_id:websiteId});
        },
        updateWebsite : function(websiteId, website){
            return Websites.findOneAndUpdate({_id:websiteId}, website);
        },
        deleteWebsite : function(websiteId){
            return Websites.findOneAndRemove({_id:websiteId});
        }
    }  
};





