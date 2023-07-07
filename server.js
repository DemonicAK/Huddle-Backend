const express = require("express");
const cors = require("cors");
const http = require("http");
const connectdb = require("./db");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
dotenv.config();

connectdb();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



app.use("/api/auth", userRoutes);



const rooms = ["general", "random", "games", "coding"];
const io = require("socket.io")(server, {
  cors: {
    // origin: '*',
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
// console.log(PORT);

app.listen(PORT, () => {
  console.log("Server started on", PORT);
});
