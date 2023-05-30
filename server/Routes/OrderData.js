const express = require('express')
const router = express.Router(); 
const Order = require('../model/Orders'); 

router.post('/orderdata', async (req, res)=>{
    try{
        let data = req.body.order_data
        console.log(data); 
        await data.splice(0, 0, {order_date: req.body.order_date})
        console.log('backend'); 
        
        //if email not existing in db we're creating else : InsertMany()
        let eId = await Order.findOne({email : req.body.email})
        console.log(eId); 
        if(eId === null){
            try{
                let order = new Order({
                    email: req.body.email, 
                    order_data: [data]
                })
                await order.save(); 
                res.json({success : true});
            }catch(error){
                console.log(error.message); 
                res.send("Server Error", error.message); 
            }
        } 
        else {
            try {
                await Order.findOneAndUpdate({email: req.body.email}, {$push: {order_data: data} }).then(()=>{
                    res.json({success:true})
                })
            } catch(error){
                res.send("Server Error", error.message)
            }
        }
    }catch(error)   {
        console.log('OrderData', error); 
    }
   
})

router.post('/myorderdetails', async(req, res)=>{
    try {
        console.log(req.body); 
        let myData = await Order.findOne({'email': req.body.email})
        res.json({orderData:myData}); 
    } catch (error) {
        res.send("Server Error", error.message)
    }
})

module.exports = router; 