require('dotenv').config();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypct = require('bcrypt');

exports.signUp = (async (req, res) => {
    const data = req.body;
    var token = jwt.sign({email: req.body.email},process.env.SECERET);
    const hashpass = bcrypct.hashSync(req.body.password,10);
    data.token = token;
    data.password = hashpass; 
    try {
        const newuser = await User.create(data);
        res.status(200).json({ token, message: 'userCreate successFully' });

    } catch (error) {
        res.status(400).json({ message: 'error while creating user' });
        console.log('error while creating user', error);
    }
})

exports.login = (async(req,res)=>{
    try {
           const doc = await User.findOne({email: req.body.email});
           const checkpass = bcrypct.compareSync(req.body.password,doc.password);
           if(checkpass)
           {
            var token = jwt.sign({email:req.body.email},process.env.SECERET);
            doc.token = token;
            doc.save();
           }
           else{
            res.sendStatus(401);
           }
    } catch (error) {
        res.status(401).json({message: error});
    }
})