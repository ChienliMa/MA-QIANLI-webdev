module.exports = function(app) {
    // var connectionString = 'mongodb://127.0.0.1:27017/test';
    //
    // if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    //     connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
    //         process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
    //         process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
    //         process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
    //         process.env.OPENSHIFT_APP_NAME;
    // }
    //
    // var mongoose = require("mongoose");
    // mongoose.connect(connectionString);
    //
    // var WebsiteSchema = mongoose.Schema({
    //     _user: { type: Number, ref: 'User' },
    //     name: String,
    //     description: String,
    //     pages: [{ type: Schema.Types.ObjectId, ref: 'Page' }],
    //     dateCreated: Date
    // });
    //
    // var websites = mongoose.model("Website", WebsiteSchema);

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
    app.get("/api/user/:uid/website", findWebsitesByUser);


    function createWebsite(req, res){
        var website = req.body;
        website.developerId = req.params.uid;
        website._id = Date.now();
        websites.push(website);
        res.sendStatus(200);
    }

    function findWebsitesByUser(req, res){
        res.status(200).send(websites.filter(function(x){return x.developerId == req.params.uid;}));
    }

    function findWebsiteById(req, res){
        var rval = websites.filter(function(x){return x._id == req.params.wid;});
        if (rval.length > 0){
            res.status(200).send(rval[0]);
        } else {
            res.sendStatus(404);
        }
    }

    function updateWebsite(req, res){
        var website = req.body;
        website._id = req.params.wid;
        for(var i = 0; i < websites.length; i++){
            if (websites[i]._id == website._id){
                websites[i] = website;
                res.sendStatus(200);
                return;
            }
        }
        res.status(404).send("website not found");
    }

    function deleteWebsite(req, res) {
        websites = websites.filter(function(x){return x._id != req.params.wid;});
        res.sendStatus(200)
    }
}





