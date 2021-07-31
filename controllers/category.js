const CategoryModel = require('../models/category')
const ProductModel = require('../models/product')
const errorHandler = require('../utils/errorHandler')
const {unlink} = require('fs')
const path = require('path');


// Получение всех категорий

module.exports.getAll = async function (req, res) {
    try {
        const categories = await CategoryModel.find()
        res.status(200).json({categories})
    } catch (e) {
        errorHandler(res, e)
    }
}

// Создание категории

module.exports.create = async function (req, res) {
    const newCategory = new CategoryModel ({
        name: req.body.categoryName.trim(),
        imagePath: req.file.filename
    })
    try {
        await newCategory.save()
        res.status(201).json({
            message: 'Категория создана'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

// Удаление категории

module.exports.remove = async function (req, res) {
    try {
        const category = await CategoryModel.findById(req.params.id)
        unlink(path.resolve(__dirname, `../public/img/newCategory/${category.imagePath}`), (err) => {
            if (err) throw err;
            console.log(`${category.imagePath} was deleted`);
        });
        console.log(category.imagePath)
        await CategoryModel.remove({_id: req.params.id})
        await ProductModel.remove({category: req.params.id})
        res.status(201).json({
            message: 'Категория удалена'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}
