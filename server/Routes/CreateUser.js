const express = require('express')
const router = express.Router(); 
const User = require('../model/User')
const { body, validationResult } = require('express-validator');

router.post('/createuser',[
    body('email', "email not valid").isEmail(),
    body('password', "incorrect password").isLength({ min: 5 })
  ] ,async (req, res)=>{
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({error : error.array()});  
    }
    try{
        let data =  new User({
            name: req.body.name, 
            password: req.body.password, 
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