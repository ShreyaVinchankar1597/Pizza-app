const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://Shreya_V:s8888695038v@cluster0.vjx5c.mongodb.net/mern-pizzaApp'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', () => {
    console.log("DB connection successful")
})

db.on('error', () => {
    console.log("DB connection failed")
})

module.exports = mongoose