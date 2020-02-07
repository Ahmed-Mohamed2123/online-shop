const productsModule = require('../models/products.model')

exports.getHome = (req, res, next) => {
    // get products from db
    // render index.ejs


    // Get Categoty
    // If category && category !== all
    //     filter
    // Else
    //     render all

    let category = req.query.category
    let validCategories = ['clothes', 'phones', 'computers']
    
    if (category && validCategories.includes(category)) {
        productsModule.getProductsByCategory(category).then(products => {
            res.render('index', {
                products: products
            })
        })
    } else {
        productsModule.getAllProducts().then(products => {
            res.render('index', {
                products: products
            })
        })
    }
}