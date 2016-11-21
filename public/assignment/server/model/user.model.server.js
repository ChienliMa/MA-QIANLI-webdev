module.exports = function (){
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var users = mongoose.model("User", UserSchema);


    return {
        createUser : function(user){

        },
        findUserById : function(userId){

        },
        findUserByUsername : function(username){

        },
        findUserByCreadentials : function(username, password){

        },
        updateUser : function(userId, user){

        },
        deleteUser : function(userId){

        }
    }






};



