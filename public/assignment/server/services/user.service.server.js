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
        } else if(req.params.id != null){
            findUserById(req, res);
        } else {
            res.send(req.user);
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
        model.Users.updateUser(req.params.uid, req.body);
        res.sendStatus(200);
    }

    // removes the user whose _id matches the userId parameter
    function deleteUser(req, res) {
        model.Users.deleteUser(req.params.uid)
            .then(
                function(){res.sendStatus(200);}
            )
    }


    // =====================
    // SESSION MANAGEMENT
    // =====================
    var bcrypt = require("bcrypt-nodejs");
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var FacebookStrategy = require('passport-facebook').Strategy;

    // login with sesson
    app.post  ('/api/login', passport.authenticate('local'), login);
    app.post('/api/logout', logout);
    app.post ('/api/register', register);
    app.get ('/api/loggedin', isLoggedin);

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function logout(req, res) {
        req.logout();
        res.sendStatus(200);
    }

    function isLoggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    // passport login local strategy
    passport.use(new LocalStrategy(localStrategy));
    function localStrategy(username, password, done) {
        model.Users
            .findUserByUsername(username)
            .then(
                function(user){
                    if(user && bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }

    function register (req, res) {
        var user = req.body;
        user.password = bcrypt.hashSync(user.password);
        model.Users
            .createUser(user)
            .then(
                function (user) {
                    req.login(user, function (err) {
                        if (err) {
                            res.status(400).send("register fail");
                        }
                        res.status(200).send(user);
                    });
                });
    }

    // login with facebook party api
    app.get ('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
    // facebook callback api
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/assignment/#/user/',
            failureRedirect: '/assignment/#/login'
        }));

    var facebookConfig = {
        clientID     : process.env.FACEBOOK_CLIENT_ID || '1162040763881333',
        clientSecret : process.env.FACEBOOK_CLIENT_SECRET || '04512cc0ac548aa8e0bd9ae0fe4f7e57',
        callbackURL  : process.env.FACEBOOK_CALLBACK_URL || 'http://webdev-chienlima.rhcloud.com/auth/facebook/callback'
    };

    passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
    function facebookStrategy(token, refreshToken, profile, done) {
        model.Users.findUserByFacebookId(profile.id)
            .then(
                function(user) {
                    if (user == null) {
                        var user  = {};
                        user.firstName = profile.name.givenName || "";
                        user.lastName = profile.name.familyName || "";
                        user.facebook = {id : profile.id, token : token};
                        return model.Users.createUser(user)
                            .then(
                                function(rval){
                                    return done(null, rval);
                                },
                                function (err) {
                                    return done(err, false);
                                });
                    } else {
                        return done(null, user);
                    }
                }
            );
    }

    // Session management.
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);
    function serializeUser(user, done) {
        done(null, user._id);
    }

    function deserializeUser(uid, done) {
        model.Users
            .findUserById(uid)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

};



