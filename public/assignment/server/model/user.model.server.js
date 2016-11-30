module.exports = function(model){
    var User = model.User;
    var Website = model.Website;

    return {
        createUser : function(user){
            return User.create(user);
        },

        findUserById : function(userId){
            return User.findById(userId);
        },

        findUserByUsername : function(username){
            return User.findOne({"username": username});
        },

        findUserByCredentials : function(username, password){
            return User.findOne({"username": username, "password": password});
        },

        updateUser : function(userId, user){
            delete user["_id"];
            delete user["__v"];
            return User.findOneAndUpdate({_id : userId}, {$set : user}, {upsert: true, new : true},function(error){console.log(error);});
        },

        deleteUser : function(userId){
            Website.remove({_user:userId});
            return User.findOneAndRemove({_id : userId});
        },

        findUserByFacebookId : function(fid){
            return User.findOne({ 'facebook.id' : fid});
        }
    }
};



