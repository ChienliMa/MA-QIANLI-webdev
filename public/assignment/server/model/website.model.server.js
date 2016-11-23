module.exports = function() {
    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var Website = mongoose.model("Website", WebsiteSchema);

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
            return Website.findOneAndUpdate({_id : websiteId}, website);
        },

        deleteWebsite : function(websiteId){
            return Website.findOneAndRemove({_id : websiteId});
        }
    }  
};





