const mongoose = require("mongoose");

const connectDatabase = ()=>{
    mongoose.connect("mongodb+srv://yamgrg:ZNdzas0ZMEm0FLYx@farmbusinessdb.elf7is9.mongodb.net/?retryWrites=true&w=majority")
   const User = require('../models/order');
    // .then((con)=> {
    //     console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);},
    //     err =>{
    //         console.log(err);
    //     });
}

module.exports = connectDatabase;