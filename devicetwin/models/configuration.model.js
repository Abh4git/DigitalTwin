const mongoose = require("mongoose");
const Int32 = require("mongoose-int32");
const { ObjectId } = require("mongodb");

const Configuation = mongoose.model(
  "Configuation",
  new mongoose.Schema({
    _id: ObjectId,
    title: String,
    description: String,
    inputs:[],
    outputs: [],
    connections:[]
  }),
  "configuration"
);

module.exports = Configuation;