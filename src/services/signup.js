const User = require("../models/users")

const bcrypt = require("bcrypt")
const SALT = 10;

async function createUser(userData) {
    const { name, email, password } = userData
    if (!password) {
        throw new Error("Password is required");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({
        name,
        email,
        password : hashedPassword,
        role: "user"
    })

    const savedUser = await user.save()
    return savedUser
}

module.exports = { createUser }