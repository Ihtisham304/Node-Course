const mongoose = require('mongoose');

const Connection = async () => {
    try {
     await mongoose.connect(process.env.DB_URL);
     console.log("Database Connected SuccessFully");
    } catch (error) {
     console.log(error);
    }
}


module.exports = Connection;