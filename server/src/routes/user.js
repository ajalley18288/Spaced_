const express = require('express')
const { userLogin, userSignUp } = require('../controllers/user')
const router = express.Router()

router.post('/user/login', userLogin)

router.post('/user/signup', userSignUp)

module.exports = router