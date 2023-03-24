const Category = require('../models/Category')
const Product = require('../models/Product')
const { multipleMongooseToObject, mongooseToObject } = require('../../utils/mongoose')

class AdminController {
    //admin
    index(req, res) {
        res.render('admin')
    }

    //[GET] /admin/manage/categories
    manageCategories(req, res, next) {
        Promise.all([Category.countDocumentsDeleted(), Category.find({})])
            .then(([deletedCategories, categories]) => {
                res.render('admin/manageCategories', {
                    deletedCategories,
                    categories: multipleMongooseToObject(categories),
                })
            })

        // Category.countDocumentsDeleted()
        //     .then(deletedCategories => {
        //         console.log(deletedCategories);
        //     })
        //     .catch(next)

        // Category.find({})
        //     .then(categories => res.render('admin/manageCategories', {
        //         categories: multipleMongooseToObject(categories)
        //     }))
        //     .catch(next)
    }

    //[GET] /admin/trash/categories
    trashCategories(req, res, next) {
        Category.findDeleted({})
            .then(categories => res.render('admin/trashCategories', {
                categories: multipleMongooseToObject(categories)
            }))
            .catch(next)
    }

    //[GET] /admin/manage/products
    manageProducts(req, res, next) {
        Product.find({})
            .then(products => { res.render('admin/manageProducts', {
                    products: multipleMongooseToObject(products),
                })
            })
            .catch(next)
    }
}

module.exports = new AdminController;