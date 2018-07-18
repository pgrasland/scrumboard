var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");

var app = express();

app.use(serveStatic(path.join(__dirname, "src")));
app.use(serveStatic(path.join(__dirname, "doc")));
app.listen(3000);
