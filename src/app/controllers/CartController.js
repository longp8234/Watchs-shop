const Product = require('../models/Product')
const { multipleMongooseToObject, mongooseToObject } = require('../../utils/mongoose')

class CartController {

    index(req, res, next) {
        res.render('cart')
    }

    addToCart(req, res, next) {
        const product = new Product(req.body)
        product.save()
            .then(() => res.redirect('/cart'))
            .catch(next)
    }
}

module.exports = new CartController;