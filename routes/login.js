const express = require('express')
const { login, logout } = require('../controllers/login')
const loginRoute = express.Router()

loginRoute.post("/login", login)
loginRoute.post("/logout", logout)

module.exports = loginRoute