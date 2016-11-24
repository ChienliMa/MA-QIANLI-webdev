module.exports = function(){
    var mongoose = require("mongoose");
    return mongoose.Schema({
        _page: {type: mongoose.Schema.Types.ObjectId, ref: 'Page'},
        type: {type: String, enum: ['HEADER', 'HTML', 'IMAGE', 'YOUTUBE', 'TEXT']},
        name: String,
        text: String,
        html_text: String,
        placeholder:String,
        description: String,
        url: String,
        width: String,
        height: String,
        rows: Number,
        size: String,
        class: String,
        icon: String,
        deletable: Boolean,
        formatted: Boolean,
        dateCreated: Date
    });
};

