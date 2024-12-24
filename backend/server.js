const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');


const app = express();
dotenv.config({path:"./config/config.env"});
PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Failed to connect ", error);
  });

app.use(cors({
    origin: 'http://localhost:5173',
    method: [ 'GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders:[
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use('/',(req,res)=>{
    res.send("Api is Working");
})



app.listen(PORT, (err)=>{
    if(err)
    console.log(err);
    else
    console.log("server started : ", PORT)
})
