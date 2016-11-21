module.exports = function() {
    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var websites = mongoose.model("Website", WebsiteSchema);

    function createWebsite(req, res){
        var website = req.body;
        website.developerId = req.params.uid;
        website._id = Date.now();
        websites.push(website);
        res.sendStatus(200);
    }

    return {
        createWebsiteForUser : function(userId, website){

        },
        findAllWebsitesForUser : function(userId){

        },
        findWebsiteById : function(websiteId){

        },
        updateWebsite : function(websiteId, website){

        },
        deleteWebsite : function(websiteId){

        }
    }  
};





