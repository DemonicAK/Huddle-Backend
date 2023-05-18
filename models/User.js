const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
    index: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [6, "Minimum password length is 6 characters"],
  },
  picture: {
    type: String,
  },
  newMessage: {
    type: objext,
    default: {},
  },
  status: {
    type: String,
    default: "online",
  },
},{minimize:false});

const User = mongoose.model("user", userSchema);

module.exports = User;