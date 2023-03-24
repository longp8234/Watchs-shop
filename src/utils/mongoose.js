
module.exports = {
    //list item
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject())
    },

    //item
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}