module.exports = function (app) {
    var mongoose = require("mongoose");
    var pages = mongoose.model("Page", PageSchema);


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





