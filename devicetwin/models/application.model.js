const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const Int32 = require("mongoose-int32");

const Application = mongoose.model(
    "Application",
    new mongoose.Schema({
      _id: ObjectId,
      value: Int32,
      inputs: [],
      outputs: []
    }),
    "application"
  );





module.exports = Application;