const express = require('express')
const router = express.Router(); 
const User = require('../model/User')
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 

router.post('/createuser',[
    body('email', "email not valid").isEmail(),
    body('password', "incorrect password").isLength({ min: 5 })
  ] ,async (req, res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({error : error.array()});  
    }

    const salt = await bcrypt.genSalt(10); 
    let hashedString = await bcrypt.hash(req.body.password, parseInt(salt)); 

    try{ 
        let data =  new User({
            name: req.body.name, 
            password: hashedString, 
            email : req.body.email,
            location : req.body.location
        }) 
        let result = await data.save(); 
        res.json({success : true}); 
    } catch (error){    
        console.log(error)
        res.json({success : false}); 
    }
})

module.exports = router; 