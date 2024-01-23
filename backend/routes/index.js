// index route of all controllers and routes

const express = require('express')
const router = express.Router()

router.use('/', require('./auth/authIndex'))
router.use('/users', require('./user/userIndex'))
router.use('/', require('./post/postIndex'))

module.exports = router
