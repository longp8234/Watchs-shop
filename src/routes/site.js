const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.get('/register', siteController.register)
router.get('/login', siteController.login)
router.get('/contact', siteController.contact)
router.get('/about', siteController.about)
router.get('/', siteController.home)

module.exports = router
