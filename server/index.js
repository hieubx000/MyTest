require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')


async function main() {

    const app = express();
    app.use(express.json());

    //database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");



    //server
    app.listen(process.env.PORT || 9000, (err) => {
        if (err) throw err;

        console.log("Server Connected");
    })

}
main()