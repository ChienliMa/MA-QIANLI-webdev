module.exports = function() {
    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var Website = mongoose.model("Website", WebsiteSchema);

    return {
        createWebsiteForUser : function(userId, website){
            website.userId = userId;
            return Website.create(website);
        },

        findAllWebsitesForUser : function(userId){
            return Website.find({userId:userId});

        },

        findWebsiteById : function(websiteId){
            return Website.findOne({_id:websiteId});
        },

        updateWebsite : function(websiteId, website){
            return Website.findOneAndUpdate({_id:websiteId}, website);
        },

        deleteWebsite : function(websiteId){
            return Website.findOneAndRemove({_id:websiteId});
        }
    }  
};





