module.exports = function(app) {
    var websites =
        [
            { _id: "123", name: "Facebook",    developerId: "456" },
            { _id: "234", name: "Tweeter",     developerId: "456" },
            { _id: "456", name: "Gizmodo",     developerId: "456" },
            { _id: "567", name: "Tic Tac Toe", developerId: "123" },
            { _id: "678", name: "Checkers",    developerId: "123" },
            { _id: "789", name: "Chess",       developerId: "234" }
        ];


    app.get("/api/website/:wid", findWebsiteById);
    app.put("/api/website/:wid", updateWebsite);
    app.delete("/api/website/:wid", deleteWebsite);

    app.post("/api/user/:uid/website", createWebsite);
    app.get("/api/user/:uid/website", findAllWebsitesForUser);


    function createWebsite(req, res){
        var website = req.body;
        website._id = Date.now();
        website.developerId = req,uid;
        websites.push(website);
        res,send(200);
    }

    function findWebsitesByUser(req, res){
        return websites.filter(function(x){return x.developerId == req.params.uid;});
    }

    function findWebsiteById(req, res){
        return websites.filter(function(x){return x._id == req.params.wid;});
    }

    function updateWebsite(req, res){
        var website = req.body;
        website._id = req.params.wid;
        for(var i = 0; i < websites.length; i++){
            if (websites[i]._id == website._id){
                websites[i] = website._id;
                res.send(200);
                return;
            }
        }
    }

    function deleteWebsite(req, res) {
        websites = websites.filter(function(x){return x._id != websiteId;});
        res.sed(200)
    }
}





