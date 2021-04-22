const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
})

module.exports = model('product', schema)