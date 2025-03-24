const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://th14boot:Zion123@cluster0.36z8h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB")
})

mongoose.connection.on("error", (err) => {
    console.log(`Error connecting to MongoDB: ${err}`)
})

module.exports = mongoose;