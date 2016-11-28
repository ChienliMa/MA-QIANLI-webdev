module.exports = function (app, model) {
    app.get("/api/user", findUser);
    app.get("/api/user/:uid", findUser);
    app.post("/api/user", createUser);
    app.put("/api/user/:uid", updateUser);
    app.delete("/api/user/:uid", deleteUser);


    function createUser(req, res) {
        model.Users.createUser(req.body)
            .then(
                function(){res.sendStatus(200);}
            )
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
    model.Users.findUserById(req.params.uid)
            .then(
                function(rval){res.send(rval);}
            )
    }

    // returns the user in local users array whose username matches the parameter username
    function findUserByUsername (req, res) {
        model.Users.findUserByUsername(req.query.username)
            .then(
                function(rval){res.send(rval);}
            )
    }

    // returns the user whose username and password match the username and password parameters
    function findUserByCredentials (req, res) {
        model.Users.findUserByCredentials(req.query.username, req.query.password)
            .then(
                function(rval){res.status(200).send(rval);}
            )
    }

    // updates the user in local users array whose _id matches the userId parameter
    function updateUser(req, res) {
        model.Users.updateUser(req.params.uid, req.body)
            .then(
                function(rval){res.status(200).send(rval);}
            )
    }

    // removes the user whose _id matches the userId parameter
    function deleteUser(req, res) {
        model.Users.deleteUser(req.params.uid)
            .then(
                function(){res.sendStatus(200);}
            )
    }
};



