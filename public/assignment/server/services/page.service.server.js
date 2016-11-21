module.exports = function (app, model) {

    var pages =
        [
            { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem", title: "Lorem",
                widgets: [123,234,345,456,567,678,789]},
            { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem", title: "Lorem"},
            { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem", title: "Lorem"}
        ]

    app.get("/api/page/:pid", findPageByid);
    app.put("/api/page/:pid", updatePage);
    app.delete("/api/page/:pid", deletePage);

    app.post("/api/website/:wid/page", createPage);
    app.get("/api/website/:wid/page",findPagesByWebsiteId);


    function createPage(req, res){
        var page = req.body;
        page.websiteId = req.params.wid;
        page._id = Date.now();
        pages.push(page);
        res.sendStatus(200);
    }

    function updatePage(req, res){
        for(var i = 0; i < pages.length ;i++){
            if (pages[i]._id == req.params.pid){
                pages[i] = req.body;
                res.send(200);
                return;
            }
        }
    }

    function findPageByid(req, res){
        var rval = pages.filter(function(x){return x._id == req.params.pid;})
        res.send(rval[0]);
    }

    function deletePage(req, res){
        pages = pages.filter(function(x){return x._id != req.params.pid;});
        res.sendStatus(200);
    }

    function findPagesByWebsiteId(req, res){
        res.send(pages.filter(function(x){return x.websiteId == req.params.wid;}));
    }
}





