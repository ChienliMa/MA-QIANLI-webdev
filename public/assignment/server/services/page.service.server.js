module.exports = function (app, model) {
    app.get("/api/page/:pid", findPageByid);
    app.put("/api/page/:pid", updatePage);
    app.delete("/api/page/:pid", deletePage);

    app.post("/api/website/:wid/page", createPage);
    app.get("/api/website/:wid/page",findPagesByWebsiteId);


    function createPage(req, res){
        mode.Pages.createPage(req.params.wid, req.body)
            .then(
                res.sendStatus(200);
            );
    }

    function updatePage(req, res){
        mode.Pages.updatePage(req.params.pid, req.body)
            .then(
                res.send(200);
            );
    }

    function findPageById(req, res){
        model.Pages.findPageById(req.params.pid)
            .then(
                res.send(rval[0]);
            )
    }

    function deletePage(req, res){
        model.Pages.deletePage(req.params.pid);
        res.sendStatus(200);
    }

    function findPagesByWebsiteId(req, res){
        model.Pages.findPagesByWebsite(req.params.wid)
            .then(
                res.send(pages.filter(function(x){return x.websiteId == req.params.wid;}));
            );
    }
}





