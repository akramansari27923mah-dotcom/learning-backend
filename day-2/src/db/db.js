const mongoose = require('mongoose')

const connectDB = async() => {
    await mongoose.connect('mongodb+srv://learning-backend:hxsEY2OBBPjxg9u6@learn-backend.d83fkbx.mongodb.net/learn-db')

    console.log('connected to db');
    
}

module.exports = connectDB