const express = require('express')
const route = express.Router()
const newsController = require('../app/controllers/SiteController')

route.use('/search',newsController.search)
route.use('/',newsController.home)

module.exports = route