module.exports = function(app) {
    var mongoose = require("mongoose");
    var WebsiteSchema = mongoose.Schema({
        _user: { type: Number, ref: 'User' },
        name: String,
        description: String,
        pages: [{ type: Schema.Types.ObjectId, ref: 'Page' }],
        dateCreated: Date
    });

    var websites = mongoose.model("Website", WebsiteSchema);

};





