const User = require("../models/users")

const bcrypt = require("bcryptjs")

async function createUser(userData) {
    const { name, email, password } = userData
    const hashedPassword = await bcrypt.hash(userData.password, 10)
    const user = new User({
        name,
        email,
        hashedPassword,
        role: "user"
    })

    const savedUser = await user.save()
    return savedUser
}