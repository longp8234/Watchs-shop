const Category = require('../models/Category')
const Product = require('../models/Product')
const { multipleMongooseToObject, mongooseToObject } = require('../../utils/mongoose')

class ProductController {

    index(req, res, next) {
        Product.find({})
            .then(products => res.render('products', {
                products: multipleMongooseToObject(products)
            }))
            .catch(next)
    }

    //[GET] /products/create
    createProduct(req, res, next) {
        Category.find({})
            .then(categories => res.render('products/createProduct', {
                categories: multipleMongooseToObject(categories)
            }))
            .catch(next)
    }

    //[POST] /products/store
    storeProduct(req, res, next) {
        const product = new Product(req.body)
        product.save()
            .then(() => res.redirect('/admin/manage/products'))
            .catch(next)
    }

    //[GET] /products/:id/edit
    editProduct(req, res, next) {
        Promise.all([Product.findById(req.params.id), Category.find({})])
            .then(([product, categories]) => res.render('products/editProduct', {
                product: mongooseToObject(product),
                categories: multipleMongooseToObject(categories)
            }))
    }

    updateProduct(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/manage/products'))
            .catch(next)
    }

    deleteProduct(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new ProductController;