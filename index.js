require("dotenv").config();
const express = require("express");
const cors = require('cors');
const path = require('path');
const Connection = require('./db-connection/db');
const ProductRoute = require('./routes/productRoute');
const app = express();
Connection();


app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,process.env.Public_DIR)));
app.use('/api',ProductRoute);
app.use("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'dist','index.html'));
})



const PORT = process.env.PORT; 
app.listen(PORT,()=>{
    console.log(`server listning on port ${PORT}`);
})