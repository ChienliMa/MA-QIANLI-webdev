module.exports = function(app){
    var mongoose = require("mongoose");
    return mongoose.Schema({
        _user: { type: Number, ref: 'User' },
        name: String,
        description: String,
        pages: [{ type: Schema.Types.ObjectId, ref: 'Page' }],
        dateCreated: Date
    });
};