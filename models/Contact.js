const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    fname: String,
    lname:String,
    countryCode:String,
    phone: String
});

module.exports = mongoose.model("Contact", ContactSchema);