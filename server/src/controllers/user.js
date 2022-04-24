const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const existingUser = await User.findOne({ email }) // we are looking for a pre-existing user with the matching email
        
        if(!existingUser) return res.status(404).json({ message: 'Something went wrong' }) // if the user doesn't exist...
        
        const isCorrectPassword = await bcrypt.compare(password, existingUser.password) // compare the found user's password and the person logging in
        
        if(!isCorrectPassword) return res.status(400).send() // if password is incorrect...

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, { expiresIn: '1h' }) // the things we want to store in the jwt

        res.status(200).json({ result: existingUser, token}) // send back the user and the token

    } catch (e) {
        res.status(500).json({ message: 'Something went wrong' })
    }

}

const userSignUp = async (req, res) => {
    const { email, password, name, verifyPassword } = req.body
    
    try{
        const existingUser = await User.findOne({ email }) // if there already exists an account with that email...
        
        if(existingUser) return res.status(404).json({ message: 'User already exists' })

        if(password !== verifyPassword) return res.status(404).json({ message: "Passwords don't match" })

        const hashedPassword = await bcrypt.hash(password, 12) // level of hash difficulty

        const newUser = await User.create({ email, password: hashedPassword, name }) // store data in database

        const token = jwt.sign({ email: newUser.email, id: newUser._id }, 'test', { expiresIn: '1h' })

        res.status(200).json({ result: newUser, token}) // send new user and the token
    } catch (e) {
        res.status(500).send(e)
    }

}

module.exports = {
    userLogin,
    userSignUp
}