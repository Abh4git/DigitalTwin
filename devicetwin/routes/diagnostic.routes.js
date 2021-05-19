const controller = require("../controllers/diagnsotics.controller");
const cors = require ('cors');
const bodyParser = require('body-parser');
var formBody = require("body/form");
// create application/json parser
var jsonParser = bodyParser.json()

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

 
  
  var corsOptions = {

    origin: true
  };


  // Get Diagnostics Information
  app.get("/api/controller/:id", cors(corsOptions), jsonParser, controller.getDiagnosticInformation);
  // POST Diagnostics Information
  app.post("/api/controller/", cors(corsOptions), jsonParser, controller.createDiagnosticsInfo);
  
};