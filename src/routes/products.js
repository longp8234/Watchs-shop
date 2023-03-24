const express = require('express')
const router = express.Router()

const productController = require('../app/controllers/ProductController')

router.delete('/:id', productController.deleteProduct)
router.put('/:id', productController.updateProduct)
router.get('/:id/edit', productController.editProduct)
router.get('/create', productController.createProduct)
router.post('/store', productController.storeProduct)

router.get('/', productController.index)

module.exports = router