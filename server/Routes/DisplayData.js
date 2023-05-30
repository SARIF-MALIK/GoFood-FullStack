const express = require('express')
const router = express.Router(); 

router.post('/fooddata', (req, res)=>{
    try {
        res.send([global.food_items, global.food_categories]); 
    } catch (error) {
        console.log("displayData",error); 
        res.send("Server error"); 
    }
})

module.exports = router; 