const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/AdminController')

router.get('/manage/products', adminController.manageProducts)
router.get('/trash/categories', adminController.trashCategories)
router.get('/manage/categories', adminController.manageCategories)
router.get('/', adminController.index)

module.exports = router
