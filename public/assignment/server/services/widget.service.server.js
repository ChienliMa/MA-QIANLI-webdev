var fs = require("fs");
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })

module.exports = function(app, model){
    app.post("/api/page/:pid/widget", createWidget);
    app.get("/api/page/:pid/widget", findWidgetsByPageId);

    app.get("/api/widget/:wgid", findWidgetById);
    app.put("/api/widget/:wgid", updateWidget);
    app.delete("/api/widget/:wgid", deleteWidget);

    app.post ("/api/upload", upload.single('file'), uploadFile);

    //adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
    function createWidget(req, res){
        // need to add to page too
        model.Widgets.createWidget(req.params.pid, req.body)
            .then(function(widget){
                model.Pages.addWigetToPage(req.params.pid, widget._id);
                res.status(200).send(widget._id);
            })
    }

    //retrieves the widgets in local widgets array whose pageId matches the parameter pageId
    function findWidgetsByPageId(req, res){
        model.Pages.findPopulatedPageById(req.params.pid)
            .then(function(page){
                res.send(page.widgets);
            });
    }

    //retrieves the widget in local widgets array whose _id matches the widgetId parameter
    function findWidgetById(req, res){
        model.Widgets.findWidgetById(req.params.wgid)
            .then(function(rval){res.send(rval);})
    }

    //updates the widget in local widgets array whose _id matches the widgetId parameter
    function updateWidget(req, res){
        model.Widgets.updateWidget(req.params.wgid, req.body)
            .then(function(){res.sendStatus(200);})

    }

    //removes the widget from local widgets array whose _id matches the widgetId parameter
    function deleteWidget(req, res){
        model.Widgets.deleteWidget(req.params.wgid)
            .then(function(){res.sendStatus(200);})
    }

    function uploadFile(req, res) {
        res.status(200).send("/"+req.file.path);
    }
};

