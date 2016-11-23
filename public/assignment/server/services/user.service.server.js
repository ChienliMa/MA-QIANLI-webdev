module.exports = function (app, model) {
    app.get("/api/user", findUser);
    app.get("/api/user/:uid", findUser);
    app.post("/api/user", createUser);
    app.put("/api/user/:uid", updateUser);
    app.delete("/api/user/:uid", deleteUser);


    function createUser(req, res) {
        var user = req.body;
        model.Users.createUser(user)
            .then(

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
        var id = req.params.uid;
        model.Users.findUserById(uid)
            .then()

        res.status(200).send(rval.length > 0 ? rval[0] : null);
    }

    // returns the user in local users array whose username matches the parameter username
    function findUserByUsername (req, res) {
        model.Users.findUserByUsername(req.query.username)
            .then()

        res.send(rval.length > 0 ? rval[0] : null);
    }

    // returns the user whose username and password match the username and password parameters
    function findUserByCredentials (req, res) {
        model.Users.findUserByCredentials(req.query.username, req.query.password)
            .then(


            )
        res.status(200).send(rval.length > 0 ? rval[0] : null);
    }

    // updates the user in local users array whose _id matches the userId parameter
    function updateUser(req, res) {
        model.Users.updateUser(req.params.uid, req.body)
            .then(


            )


        res.status(404).send("user not found");
    }

    // removes the user whose _id matches the userId parameter
    function deleteUser(req, res) {
        model.Users.deleteUser(req.params.uid)
            .then(


            )
        res.send(200);
    }
};



