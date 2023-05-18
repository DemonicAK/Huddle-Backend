const express=require('express');
const cors = require('cors');
const app=express();
const  PORT=process.env.PORT || 5000;
const rooms = ['general', 'random'];


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const server=require('http').createServer(app);

const connectdb = require("./db");

connectdb();
const io=require('socket.io')(server, {
    cors: {
        // origin: '*',
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

app.listen( PORT, () => {
    console.log('Server started on',PORT);
});