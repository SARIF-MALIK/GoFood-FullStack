const express = require('express')
const router = express.Router(); 
const User = require('../model/User')
const { body, validationResult } = require('express-validator');

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
        if(req.body.password === userData.password){
            res.json({success : true}); 
        }
        else 
        return res.status(400).json({error : "incorrect email or password"});
    } catch (error){    
        console.log(error)
        res.json({success : false}); 
    }
})

module.exports = router; 