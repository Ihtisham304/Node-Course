require("dotenv").config();
const express = require("express");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path');
const Connection = require('./db-connection/db');
const ProductRoute = require('./routes/productRoute');
const UserRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const app = express();
Connection();

const auth = ((req,res,next)=>{
    const token = req.get('Authorization').split('Bearer ')[1];
    const decoded = jwt.verify(token,process.env.SECRET);
    console.log(decoded);
    if(decoded.email)
    {
        next();
    }
    else
    {
        res.sendStatus(404);
    }

})

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,process.env.Public_DIR)));
app.use('/auth',authRoute);
app.use('/api',auth,ProductRoute);
app.use('/api',auth,UserRoute);
app.use("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'dist','index.html'));
})



const PORT = process.env.PORT; 
app.listen(PORT,()=>{
    console.log(`server listning on port ${PORT}`);
})