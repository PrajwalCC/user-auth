const express = require('express')
// const validator = require('../utils/validator')
const authController = require('../controllers/auth-controller')

const router = express.Router()

router.post('/signup', authController.signup)

router.post('/login', authController.login)
// router.get("/welcome", authController.welcome)
// router.get('/logout', authController.logout)


module.exports = router