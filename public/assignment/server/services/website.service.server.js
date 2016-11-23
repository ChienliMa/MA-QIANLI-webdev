module.exports = function(app, model) {
    app.get("/api/website/:wid", findWebsiteById);
    app.put("/api/website/:wid", updateWebsite);
    app.delete("/api/website/:wid", deleteWebsite);

    app.post("/api/user/:uid/website", createWebsite);
    app.get("/api/user/:uid/website", findWebsitesByUser);


    function createWebsite(req, res){
        var website = req.body;
        model.Websites.createWebsiteForUser(req.params.uid, website)
            .then(
                function(){res.sendStatus(200);}
            );
    }

    function findWebsitesByUser(req, res){
        model.Websites.findAllWebsitesForUser(req.params.uid)
            .then(
                function(rval){res.status(200).send(rval);}
            );
    }

    function findWebsiteById(req, res){
        model.Websites.findWebsiteById(req.params.wid)
            .then(
                function(rval){res.status(200).send(rval);},
                function(){res.sendStatus(404);}
            );
    }

    function updateWebsite(req, res){
        model.Websites.updateWebsite(req.params.wid, req.body)
            .then(
                function(){res.sendStatus(200);},
                function(){res.status(404).send("website not found");}
            );
    }

    function deleteWebsite(req, res) {
        model.Websites.deleteWebsite((req.params.wid));
        res.sendStatus(200);
    }
}
