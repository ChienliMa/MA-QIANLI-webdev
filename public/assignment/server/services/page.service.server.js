module.exports = function (app, model) {
    app.get("/api/page/:pid", findPageById);
    app.put("/api/page/:pid", updatePage);
    app.delete("/api/page/:pid", deletePage);

    app.post("/api/website/:wid/page", createPage);
    app.get("/api/website/:wid/page",findPagesByWebsiteId);


    function createPage(req, res){
        mode.Pages.createPage(req.params.wid, req.body)
            .then(
                function(){res.sendStatus(200);}
            );
    }

    function updatePage(req, res){
        mode.Pages.updatePage(req.params.pid, req.body)
            .then(
                function(){res.send(200);}
            );
    }

    function findPageById(req, res){
        model.Pages.findPageById(req.params.pid)
            .then(
                function(rval){res.send(rval);}
            )
    }

    function deletePage(req, res){
        model.Pages.deletePage(req.params.pid)
            .then(
                function(){res.sendStatus(200);}
            )
    }

    function findPagesByWebsiteId(req, res){
        model.Pages.findPagesByWebsite(req.params.wid)
            .then(
                function(rval){res.send(rval);}
            );
    }
};





