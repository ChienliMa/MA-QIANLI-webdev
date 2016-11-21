module.exports = function (app){
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var users = mongoose.model("User", UserSchema);



};



