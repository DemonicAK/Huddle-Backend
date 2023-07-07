
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const prod_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@userdata.eh8iozm.mongodb.net/chatapp`;
// console.log(prod_URL);

const mongoURI = process.env.MONGO_URI;
// console.log(mongoURI);

const connectToMongo = async () => {
  const result = await mongoose.connect(mongoURI);
  const fun = () => {
    console.log("Mongo DB connected");
  };
  fun();
};

module.exports = connectToMongo;
