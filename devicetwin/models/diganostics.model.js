const mongoose = require("mongoose");
const Int32 = require("mongoose-int32");
const { ObjectId } = require("mongodb");


const Diagnostics = mongoose.model(
  "Diagnostics",
  new mongoose.Schema({
    _id: ObjectId,
    title: String,
    description: String,
    errortrace: []
  }),
  "diagnostics"
);

module.exports = Diagnostics;