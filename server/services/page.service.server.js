module.exports = function (app) {
    var pages =
        [
            { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem", title: "Lorem"},
            { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem", title: "Lorem"},
            { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem", title: "Lorem"}
        ]

    app.get("/api/page/:pid", findPageByid);
    app.put("/api/page/:pid", updatePage);
    app.delete("/api/page/:pid", deletePage);
    app.post("/api/website/:wid/page", createPage);

    app.get("/api/website/:wid/page",findAllPageForWebsite);


    function createPage(req, res){
        var page = req.body;
        page.websiteId = req.params.wid;
        pages.push(page);
        res.send(200);
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

    function deletePage(req, res){
        pages.filter(function(x){return x._id != req.pid;});
        res.send(200);
    }

    function findAllPageForWebsite(req, res){
        res.send(pages.filter(function(x){return x.websiteId == req.params.wid;}));
    }

    function findPageByid(req, res){
        res.send(pages.filter(function(x){return x._id == req.params.pid;}));
    }
}





