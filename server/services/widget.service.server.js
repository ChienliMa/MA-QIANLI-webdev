module.exports = function(app){
    var widgets =
        [
            { _id: "123", widgetType: "HEADER",     pageId: "321", size: 2, text: "GIZMODO"},
            { _id: "234", widgetType: "HEADER",     pageId: "321", size: 4, text: "Lorem ipsum"},
            { _id: "345", widgetType: "IMAGE",      pageId: "321", width: "100%",
                url: "http://lorempixel.com/400/200/"},
            { _id: "456", widgetType: "HTML",       pageId: "321", text: "<p>Lorem ipsum</p>"},
            { _id: "567", widgetType: "HEADER",     pageId: "321", size: 4, text: "Lorem ipsum"},
            { _id: "678", widgetType: "YOUTUBE",    pageId: "321", width: "100%",
                url: "https://www.youtube.com/embed/AM2Ivdi9c4E" },
            { _id: "789", widgetType: "HTML",       pageId: "321", text: "<p>Lorem ipsum</p>"}
        ];

    app.post("/api/page/:pid/widget", createWidget);
    app.get("/api/page/:pid/widget", findWidgetsByPageId);

    app.get("/api/widget/:wgid", findWidgetById);
    app.get("/api/widget/:wgid", updateWidget);
    app.delete("/api/widget/:wgid", deleteWidget);

    //adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
    function createWidget(req, res){
        var widget = req.body;
        widget.pageId = req.params.pid;
        widget._id = Date.now();
        widgets.push(widget);
        res.sendStatus(200);
    }

    //retrieves the widgets in local widgets array whose pageId matches the parameter pageId
    function findWidgetsByPageId(req, res){
        res.send(widgets.filter(function(x){return x.pageId == req.params.pid;}));
    }

    //retrieves the widget in local widgets array whose _id matches the widgetId parameter
    function findWidgetById(req, res){
        var rval = widgets.filter(function(x){return x._id == req.params.wgid;});
        res.send(rval[0]);
    }

    //updates the widget in local widgets array whose _id matches the widgetId parameter
    function updateWidget(req, res){
        for(var i = 0; i < widgets.length ; i++){
            if(widgets[i]._id == req.params.wid){
                var widget = req.body;
                widget._id = req.params.wid;
                res.sendStatus(200);
            }
        }
    }

    //removes the widget from local widgets array whose _id matches the widgetId parameter
    function deleteWidget(req, res){
        widgets = widgets.filter(function(x){return x._id != req.params.wgid;});
        res.sendStatus(200);
    }
};

