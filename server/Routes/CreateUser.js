const express = require('express')
const router = express.Router(); 
const User = require('../model/User')

router.post('/createuser', async (req, res)=>{
    try{
        let data =  new User({
            name: "Shyam Das", 
            password: 'abc123', 
            email : 'shyam@gmail.com',
            location : 'Qwerty edref'
        })
        let result = await data.save(); 
        res.json({success : true}); 
    } catch (error){    
        console.log(error)
        res.json({success : false}); 
    }
})

module.exports = router; 