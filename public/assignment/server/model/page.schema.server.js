module.exports = function (app) {
    var mongoose = require("mongoose");
    return mongoose.Schema({
        _website: [{ type: Schema.Types.ObjectId, ref: 'Website' }],
        name: String,
        title: String,
        description: String,
        widgets: [Widget],
        dateCreated: Date
    });
};





