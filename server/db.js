const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sarifmalikk:sarifmalikk123@gofoodcluster.whf8tie.mongodb.net/gofoodmanual?retryWrites=true&w=majority'



const database = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected");
        const data  = await mongoose.connection.db.collection('gofoodcollection2').find({}).toArray(); 
        const foodcategory = await mongoose.connection.db.collection('gofoodcollection').find({}).toArray(); 
        // console.log(foodcategory);
        global.food_items = data;  
        global.food_categories = foodcategory; 
    }         
    catch (err) {
        console.log(err);
    }
}

module.exports = database; 