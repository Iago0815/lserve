const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
   {

    firstname: {
      type: String,
      trim: true,
      maxLength: 32,
    },
     lastname: {
      type: String,
      trim: true,
      maxLength: 32,
    },
    email: {
      type: String,
      trim: true,
      maxLength: 32,
    },
    phone: {
      type: String,
      trim: true,
      maxLength: 32,

    },   
    tdl: {
      type: String,
      trim: true,
      maxLength: 3,
    },
   },  
{ timestamps: true }

);

module.exports = mongoose.model("Lead", leadSchema);
