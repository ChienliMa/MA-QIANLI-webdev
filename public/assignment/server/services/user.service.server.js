module.exports = function (app, model) {
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



