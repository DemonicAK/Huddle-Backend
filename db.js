
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@userdata.eh8iozm.mongodb.net/chatapp`;

// console.log(URL);

// const mongoURI = process.env.MONGODB_URI;

const connectToMongo = async () => {
  const result = await mongoose.connect(URL);
  const fun = () => {
    console.log("Mongo DB connected");
  };
  fun();
};

module.exports = connectToMongo;
