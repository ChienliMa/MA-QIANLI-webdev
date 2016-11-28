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
        model.Websites.findWebsitesByUser(req.params.uid)
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
        model.Websites.updateWebsite(req.params.wid, req.body);
        res.sendStatus(200);
    }

    function deleteWebsite(req, res) {
        model.Websites.deleteWebsite((req.params.wid))
            .then(function(){res.sendStatus(200);});
    }
}
