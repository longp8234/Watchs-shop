const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Category = new Schema({
    nameCategory: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'nameCategory', unique: true },
    product: [
        { type: Schema.Types.ObjectId, ref: "products" }
    ]
}, {
    timestamps: true
});

mongoose.plugin(slug);
Category.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
})

module.exports = mongoose.model('categories', Category);
