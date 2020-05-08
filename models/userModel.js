const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema(
  {
    username: { type: String },
    password: { type: String },
    firstname: { type: String },
    lastname: { type: String },
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("User", userModel);
