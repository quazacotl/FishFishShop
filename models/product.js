const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: Number,
    isAvailable: {
        type: Boolean,
        default: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'}
})

module.exports = model('product', ProductSchema)