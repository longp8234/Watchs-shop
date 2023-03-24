const path = require('path')
const express = require('express')
const app = express()
const dotenv = require('dotenv/config')
const db = require('./config/db')
const port = process.env.PORT || 3000
const handlebars = require('express-handlebars');
const route = require('./routes')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

app.use(methodOverride('_method'))

//connect db
db.connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app)

db.connect().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
})