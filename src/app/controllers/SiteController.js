const Category = require('../models/Category')
const Product = require('../models/Product')
const { multipleMongooseToObject } = require('../../utils/mongoose')

class SiteController {
    //[GET] /home
    home(req, res, next) {
        // res.render('home')
        Promise.all([Category.find({}), Product.find({})])
            .then(([categories, products]) => {
                res.render('home', {
                    categories: multipleMongooseToObject(categories),
                    products: multipleMongooseToObject(products)
                })
            })
            .catch(next)
        // Category.find({})
        //     .then(categories => {
        //         res.render('home', { categories: multipleMongooseToObject(categories) })
        //     })
        //     .catch(next)

        // Product.find({})
        //     .then(products => {
        //         res.render('home', { products: multipleMongooseToObject(products) })
        //     })
        //     .catch(next)
    }

    about(req, res) {
        res.render('about')
    }

    contact(req, res) {
        res.render('contact')
    }

    login(req, res) {
        res.render('login')
    }

    register(req, res) {
        res.render('register')
    }

}

module.exports = new SiteController;