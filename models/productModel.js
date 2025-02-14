const { Schema, model } = require('../connection');

const mySchema = new Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,          
    createdAt: { type: Date, default: Date.now }

});

module.exports = model('product', mySchema);


// title : String
// price : Number
// description : String
// category : String
// image : String