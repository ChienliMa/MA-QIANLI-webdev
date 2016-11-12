module.exports = function (app) {

    var connectionString = 'mongodb://127.0.0.1:27017/test';

    if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
        connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME;
    }

    var mongoose = require("mongoose");
    mongoose.connect(connectionString);

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        websites: [Website],
        dateCreated: Date
    });

    var users = mongoose.model("User", UserSchema);

    // var users =
    //     [
    //         {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    //         {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    //         {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    //         {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    //     ];

    app.get("/api/user", findUser);
    app.get("/api/user/:uid", findUser);
    app.post("/api/user", createUser);
    app.put("/api/user/:uid", updateUser);
    app.delete("/api/user/:uid", deleteUser);


    function createUser(req, res) {
        var user = req.body;
        user._id = Date.now();
        users.push(user);
        res.status(200).send();
    }

    function findUser(req, res){
        var q = req.query;
        if (q.username && q.password){
            findUserByCredentials(req, res);
        } else if (q.username) {
            findUserByUsername(req, res);
        } else {
            findUserById(req, res);
        }
    }

    // returns the user in local users array whose _id matches the userId parameter
    function findUserById(req, res) {
        var rval = users.filter(function(x){return x._id == req.params.uid;});
        res.status(200).send(rval.length > 0 ? rval[0] : null);
    }
    // returns the user in local users array whose username matches the parameter username
    function findUserByUsername (req, res) {
        var rval = users.filter(function(x){return x.username == req.query.username;});
        res.send(rval.length > 0 ? rval[0] : null);
    }

    // returns the user whose username and password match the username and password parameters
    function findUserByCredentials (req, res) {
        var q = req.query;
        var rval = users.filter(function(x){return x.username == q.username && x.password == q.password;});
        res.status(200).send(rval.length > 0 ? rval[0] : null);
    }

    // updates the user in local users array whose _id matches the userId parameter
    function updateUser(req, res) {
        for(var i = 0; i <  users.length; i++){
            if (users[i]._id == req.params.uid){
                users[i] = req.body;
                res.send(200);
                return;
            }
        }
        res.status(404).send("user not found");
    }

    // removes the user whose _id matches the userId parameter
    function deleteUser(req, res) {
        users.filter(function(x){return x._id != req.params.uid;});
        res.send(200);
    }
};



