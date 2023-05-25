const express = require('express')
const router = express.Router(); 
const User = require('../model/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 

const jwtSecretKey = 'its a secret key1233242sadf@#434';  

router.post('/loginuser',[ body('email', "email not valid").isEmail(),],async (req, res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({error : error.array()});  
    }
    try{
        let userData = await User.findOne({email:req.body.email})
        if(!userData){
            return res.status(400).json({error : "incorrect email or password"});
        }
        const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
        if(!pwdCompare){
            return res.status(400).json({error : "incorrect email or password"});
        }
        const data = {
            user:{
                id:userData.id
            }
        }
        const authToken = jwt.sign(data, jwtSecretKey)
        return res.json({success : true, authToken: authToken}); 
    } catch (error){    
        console.log(error)
        res.json({success : false}); 
    }
})

module.exports = router; 