const Category = require('../models/Category')
const { mongooseToObject } = require('../../utils/mongoose')

class CategoryController {
    //[GET] /detailCategory
    detailCategory(req, res, next) {
        Category.findOne({ slug: req.params.slug })
            .then(category => {
                res.render('categories/detailCategory', { category: mongooseToObject(category) })
            })
            .catch(next)
        
        // Category.findById(req.params.id).populate("product")
        //     .then(category => res.render('categories/detailCategory', {
        //         category: mongooseToObject(category)
        //     }))
        //     .catch(next)
    }

    //[GET] /categories/create
    createCategory(req, res, next) {
        res.render('categories/createCategory')
    }

    //[POST] /categories/store
    storeCategory(req, res, next) {
        const category = new Category(req.body)
        category.save()
            .then(() => res.redirect('/admin/manage/categories'))
            .catch(next)
    }

    //[GET] /categories/:id/edit
    editCategory(req, res, next) {
        Category.findById(req.params.id)
            .then(category => res.render('categories/editCategory', {
                category: mongooseToObject(category)
            }))
            .catch(next)
    }

    //[PUT] /categories/:id
    updateCategory(req, res, next) {
        Category.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/manage/categories'))
            .catch(next)
    }

    //[DELETE] /categories/:id
    deleteCategory(req, res, next) {
        Category.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //Restore from trash

    //[PATCH] /categories/:id/restore
    restoreCategory(req, res, next) {
        Category.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[DELETE] /categories/:id/permanently-deleted
    permanentlyDeletedCategory(req, res, next) {
        Category.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CategoryController;