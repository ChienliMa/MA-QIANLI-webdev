module.exports = function () {
    var mongoose = require("mongoose");
    var pages = mongoose.model("Page", PageSchema);


    function createPage(req, res){
        var page = req.body;
        page.websiteId = req.params.wid;
        page._id = Date.now();
        pages.push(page);
        res.sendStatus(200);
    }

    return {
        createPage : function(websiteId, page){

        },
        findAllPagesForWebsite : function(websiteId){

        },
        findPageById : function(pageId){

        },
        updatePage : function(pageId, page){

        },
        deletePage : function(pageId){

        }
    }

};





