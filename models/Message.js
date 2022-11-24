const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    user: String,
    time: String,
    otp: String


});

module.exports = mongoose.model("Message", MessageSchema);