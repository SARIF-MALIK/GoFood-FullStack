const express = require('express')
const app = express(); 
const database = require('./db')
database(); 
const cors = require('cors'); 

app.use(cors()); 

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
//     res.header(
//         "Access-Control-Allow-Headers", 
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next(); 
// })

app.use(express.json())

app.get('/', (req, res)=>{
    res.setHeader("Access-Control-Allow-Credentials", "true");  
    res.send('hello world');     
})
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/LoginUser')); 
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData')); 

app.listen(5000, ()=>{
    console.log('server started on port 5000'); 
})

