module.exports = function(app) {
    // models
    var model = require("./server/model/models.server")();

    // service
    require("./server/services/user.service.server.js")(app, model);
    require("./server/services/website.service.server.js")(app, model);
    require("./server/services/page.service.server.js")(app, model);
    require("./server/services/widget.service.server.js")(app, model);
};