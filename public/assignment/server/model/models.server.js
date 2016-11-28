module.exports = function () {
    var mongoose = require("mongoose");
    // mongoose.Promise = global.Promise;
    var connectionString = 'mongodb://127.0.0.1:27017/webdev';

    if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
        connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME;
    }

    mongoose.connect(connectionString);

    var model = {};
    model.Website = mongoose.model("Website", require("./website.schema.server")());
    model.Page = mongoose.model("Page", require("./page.schema.server")());
    model.User = mongoose.model("User", require("./user.schema.server")());
    model.Widget = mongoose.model("Widget", require("./widget.schema.server")());

    return {
        Users : require("./user.model.server.js")(model),
        Websites : require("./website.model.server.js")(model),
        Pages : require("./page.model.server.js")(model),
        Widgets : require("./widget.model.server.js")(model)
    };
};





