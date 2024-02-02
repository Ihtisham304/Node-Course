const mongoose = require('mongoose');

const productShchema = new mongoose.Schema({
    name: String,
    price: Number,
    desc : String,
    img : String
}
)

const Product =  mongoose.model('product',productShchema);

module.exports = Product;