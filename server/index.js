const express = require('express')
const app = express(); 
const database = require('./db')
database(); 
app.get('/', (req, res)=>{
    res.send('hello world');     
})
app.use(express.json())
app.use('/api', require('./Routes/CreateUser'))

app.listen(5000, ()=>{
    console.log('server started on port 5000'); 
})

