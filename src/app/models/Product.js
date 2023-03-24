const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Product = new Schema({
    nameProduct: { type: String, required: true },
    description: { type: String },
    year: { type: Number },
    price: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'nameProduct', unique: true },
    category: { type: Schema.Types.ObjectId, ref: "categories" },
}, {
    timestamps: true
});

mongoose.plugin(slug);
Product.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
})

module.exports = mongoose.model('products', Product);
