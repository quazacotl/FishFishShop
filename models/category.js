const {Schema, model} = require('mongoose')

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    products: [
        {
        type: Schema.Types.ObjectId,
        ref: 'product'
        }
    ],
    imagePath: {
        type: String
    }

})

module.exports = model('category', CategorySchema)