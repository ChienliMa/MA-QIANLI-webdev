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


            );

        res.sendStatus(200);
    }

    function findWebsitesByUser(req, res){
        model.Websites.findAllWebsitesForUser(req.params.uid)
            .then(

            );
        res.status(200).send(websites.filter(function(x){return x.developerId == req.params.uid;}));
    }

    function findWebsiteById(req, res){
        model.Websites.findWebsiteById(req.params.wid)
            ,then(


             );

        if (rval.length > 0){
            res.status(200).send(rval[0]);
        } else {
            res.sendStatus(404);
        }
    }

    function updateWebsite(req, res){
        model.Websites.updateWebsite(req.params.wid, req.body)
            .then(


            );
        res.status(404).send("website not found");
    }

    function deleteWebsite(req, res) {
        model.Websites.deleteWebsite((req.params.wid));
        res.sendStatus(200);
    }
}
