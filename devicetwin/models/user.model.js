const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    _id: ObjectId,
    username: String,
    email: String,
    password: String,
    enabled: Boolean,
    roles: []
  }),
  "user"
);

module.exports = User;