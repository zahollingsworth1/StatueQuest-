// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/statue", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/start.html"));
  });

  app.get("/upload/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/upload.html"));
  });

  app.get("/log", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/log.html"));
  });
};
