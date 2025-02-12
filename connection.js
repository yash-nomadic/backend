const mongoose = require('mongoose');

const url = "mongodb+srv://yashsingh4537:Yash123@cluster0.g3gf2.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)

    .then((result) => {
        console.log('database connected');

    }).catch((err) => {
        console.log(err);

    });

    module.exports = mongoose;