const mongoose = require('mongoose');

mongoose.connect("mongobd: mongodb+srv://th14boot:WetsUNOuHpRiknvy@cluster0.t28mu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB")
})

mongoose.connection.on("error", (err) => {
    console.log(`Error connecting to MongoDB: ${err}`)
})

module.exports = mongoose;