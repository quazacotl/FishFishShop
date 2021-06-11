const Product = require('../models/product')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getByCategoryId = async function (req, res) {
    try {
        const products = await Product.find({
            category: req.params.categoryId
        })
        res.status(200).json(products)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function (req, res) {
    try {
        const product = await Product.find({
            _id: req.params.id
        })
        res.status(200).json(product)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function (req, res) {
    try {
        const product = await new Product({
            name: req.body.name,
            price: req.body.price,
            isAvailable: req.body.isAvailable,
            category: req.body.categoryId,
        }).save()
        res.status(201).json(product)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req, res) {
    try {
        await Product.remove({_id: req.params.id})
        res.status(200).json({message: 'Продукт удалён.'})
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function (req, res) {
    try {
        const product = await Product.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
            )
        res.status(200).json(product)
    } catch (e) {
        errorHandler(res, e)
    }
}