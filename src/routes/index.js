const adminRouter = require('./admin')
const productRouter = require('./products')
const categoryRouter = require('./categories')
const cartRouter = require('./cart')
const siteRouter = require('./site')

function route(app) {

    app.use('/cart', cartRouter)
    app.use('/admin', adminRouter)
    app.use('/products', productRouter)
    app.use('/categories', categoryRouter)
    app.use('/', siteRouter)


    app.post('/login', (req, res) => {
        res.render('login');
    })
}

module.exports = route;