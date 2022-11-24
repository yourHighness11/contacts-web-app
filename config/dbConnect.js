const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        //either use this address or add you own cluster address
        //database name = contactDB
        await mongoose.connect(process.env.DATABASE_URL);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;