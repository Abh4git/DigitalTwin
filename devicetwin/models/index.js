const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");


db.application = require("./application.model");
db.deviceactivity = require("./deviceactivity.model");
db.configuration = require("./configuration.model");
db.statemodel==require("./statemodel.model");
db.diagnotsics==require("./diganostics.model");
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;