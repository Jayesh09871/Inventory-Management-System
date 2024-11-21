const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://jayeshkakhani29:POQzpGE8NdiPZonY@cluster0.jkrc3.mongodb.net/inventory-system"

const connectToMongo  = async() =>{
    try{
        mongoose.connect(mongoURI);
        console.log("connected to mongo Successfully!")
    }
    catch(error){
        console.log(error);
    }
};
module.exports = connectToMongo;