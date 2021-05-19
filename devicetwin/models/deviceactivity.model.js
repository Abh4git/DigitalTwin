//const { Int32 } = require("mongodb");
const { Timestamp } = require("mongodb");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Int32 = require("mongoose-int32");

const DeviceActivity = mongoose.model(
  "DeviceActivity",
  new mongoose.Schema({
    _id: ObjectId,
    username: String,
    activity: String
  },{ timestamps: { createdAt: true, updatedAt: false } }),
  "device_activity"
);


module.exports = DeviceActivity;