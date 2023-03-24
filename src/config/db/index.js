const mongoose = require('mongoose');

async function connect() {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connect successfully');
    } catch (e) {
        console.log(`Connect failed`);
    }
}

module.exports = { connect };