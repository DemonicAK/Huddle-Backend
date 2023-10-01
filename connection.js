const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.s11qz.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=> {
//   console.log('connected to mongodb')
// })

const MONGO_URL = process.env.MONGO_URI;
console.log(MONGO_URL);

// mongoose.connect(MONGO_URL, options, (err) => {
//   if (err) console.log(err);
//   else console.log("mongdb is connected");
// });


mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));