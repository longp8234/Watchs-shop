const express = require('express')
const router = express.Router()

const categoryController = require('../app/controllers/CategoryController')

router.get('/create', categoryController.createCategory)
router.post('/store', categoryController.storeCategory)

router.get('/:id/edit', categoryController.editCategory)
router.put('/:id', categoryController.updateCategory)

router.delete('/:id', categoryController.deleteCategory)

//restore
router.patch('/:id/restore', categoryController.restoreCategory)
router.delete('/:id/permanently-deleted', categoryController.permanentlyDeletedCategory)

router.get('/:slug', categoryController.detailCategory)

module.exports = router
