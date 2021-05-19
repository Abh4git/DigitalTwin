const controller = require("../controllers/auth.controller");
const cors = require ('cors');
const bodyParser = require('body-parser');
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
  app.post("/api/auth/signin", cors(corsOptions), jsonParser, controller.signin);
  app.get("/api/auth/check", cors(corsOptions), jsonParser, controller.check);
};