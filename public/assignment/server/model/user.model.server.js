module.exports = function (){
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var Users = mongoose.model("User", UserSchema);


    return {
        createUser : function(user){
            return Users.create(user);
        },

        findUserById : function(userId){
            return Users.findById(userId);
        },

        findUserByUsername : function(username){
            return Users.findOne({"username": username});
        },

        findUserByCreadentials : function(username, password){
            return Users.findOne({"username": username, "password": password});
        },

        updateUser : function(userId, user){
            return Users.findOneAndUpdate({_id:userId}, user);
        },

        deleteUser : function(userId){
            return Users.findOneAndRemove({_id:userId});
        }
    }






};



