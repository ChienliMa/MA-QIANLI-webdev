module.exports = function(){
    var mongoose = require("mongoose");
    var WidgetSchema = mongoose.Schema({
        _page: {type: Schema.Types.ObjectId, ref: "Page"},
        type: {type: String, enum: ["HEADER", "HTML", "IMAGE", "YOUTUBE"]},
        name: String,
        text: String,
        placeholder:String,
        description: String,
        url: String,
        width: String,
        height: String,
        rows: Number,
        size: Number,
        class: String,
        icon: String,
        deletable: Boolean,
        formatted: Boolean,
        dateCreated: Date
    });

    var widgets = mongoose.model("Widget", WidgetSchema);
};

