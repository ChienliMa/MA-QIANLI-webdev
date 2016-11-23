module.exports = function(){
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var User = mongoose.model("User", UserSchema);

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
            return User.findOneAndUpdate({_id : userId}, user);
        },

        deleteUser : function(userId){
            return User.findOneAndRemove({_id : userId});
        }
    }
};



