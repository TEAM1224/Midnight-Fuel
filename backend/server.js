const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const sellerProductRoute = require('./routes/seller/productRoutes');
const sellerRoute = require('./routes/seller/sellerRoutes');
const userRouter = require('./routes/user/userRouters.js')
const userProductRouter = require('./routes/user/userProductorRouter.js')
const { authentication } = require('./middleware/authMiddleware');

//mongodb+srv://SSR07:Atlas@07@cluster0.mvekzq7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


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

  const corsOptions = {
    origin: "http://localhost:5173", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "token"], // Add your custom headers here
  };
  
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/seller',sellerProductRoute)
app.use('/api/seller',sellerRoute)
app.use('/api/user',userRouter)
app.use('/api/user',userProductRouter)

app.listen(PORT, (err)=>{
    if(err)
    console.log(err);
    else
    console.log("server started : ", PORT)
})
