const mongoose = require('mongoose');
require('dotenv').config();


const MONGO_URL = process.env.MONGO_URI;
console.log(MONGO_URL);



mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));