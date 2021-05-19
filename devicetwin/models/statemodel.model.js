
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Int32 = require("mongoose-int32");

const StateModel = mongoose.model(
  "StateModel",
  new mongoose.Schema({
    _id: Int32,
    name: String,
    description: String,
    statecontainer:[]
  }),
  "state_model"
);

module.exports = StateModel;