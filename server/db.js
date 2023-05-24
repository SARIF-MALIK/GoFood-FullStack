const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sarifmalikk:sarifmalikk123@gofoodcluster.whf8tie.mongodb.net/gofoodmanual?retryWrites=true&w=majority'



const database = async ()=>{
    try {
        await mongoose.connect(mongoURI); 
        console.log("connected")
        // const fetched_data  = await mongoose.connection.db.collection('gofoodcollection2'); 
        //     fetched_data.find({}).toArray(function(err, data){
        //         if(err) console.log(err); 
        //         else console.log(data); 
        //     })
    }
    catch(err){
        console.log(err); 
    }
}

module.exports = database; 