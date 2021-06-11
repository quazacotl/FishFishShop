const {Schema, model} = require('mongoose')

const AdminUserSchema = new Schema({
    login: {
        type: String,
        required: true,
    },
    password: {
            type: String,
            required: true,
    }
})

module.exports = model('admin-user', AdminUserSchema)