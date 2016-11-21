module.exports = function(app) {
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

    function findWebsitesByUser(req, res){
        res.status(200).send(websites.filter(function(x){return x.developerId == req.params.uid;}));
    }

    function findWebsiteById(req, res){
        var rval = websites.filter(function(x){return x._id == req.params.wid;});
        if (rval.length > 0){
            res.status(200).send(rval[0]);
        } else {
            res.sendStatus(404);
        }
    }

    function updateWebsite(req, res){
        var website = req.body;
        website._id = req.params.wid;
        for(var i = 0; i < websites.length; i++){
            if (websites[i]._id == website._id){
                websites[i] = website;
                res.sendStatus(200);
                return;
            }
        }
        res.status(404).send("website not found");
    }

    function deleteWebsite(req, res) {
        websites = websites.filter(function(x){return x._id != req.params.wid;});
        res.sendStatus(200)
    }
}





