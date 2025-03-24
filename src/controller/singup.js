// const { model } = require('mongoose');
const userServices = require('../services/signup');

async function createUser(req, res) {
    try {
        const { name, email, password } = req.body;
        console.log("req.body" , req.body)
        const user = await userServices.createUser({name, email, password});
        res.status(200).json({ user: user , message: 'message from ./src/controllers/signup: User created successfully' });

    } catch (error) {
        console.error("error from ./src/controllers/signup: " + error);
        res.status(400).json({ message: "Error creating user : " + error.message });
    }
}

module.exports = { createUser };