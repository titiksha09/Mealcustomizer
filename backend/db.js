const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://FINALPROJECT:finalYearProject@cluster0.qesx6fj.mongodb.net/mealCustomizerMERN?retryWrites=true&w=majority'
const mongoDB = async () => {

  try {
    
    mongoose.set('strictQuery', false)
    await mongoose.connect(mongoURI, { useNewUrlParser: true })
    console.log("Connected")
     const fetched_data =  mongoose.connection.db.collection("food_list");
     fetched_data.find({}).toArray().then(data => {
     global.food_list = data;
     //console.log(global.food_list);
     })
     
  }

  catch (error) {
    console.log(error)
    process.exit()
  }
}
module.exports = mongoDB;




