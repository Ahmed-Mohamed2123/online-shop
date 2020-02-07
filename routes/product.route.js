const router = require('express').Router()

const productController = require('../controllers/product.controler')

router.get('/', productController.getProduct)

router.get('/:id', productController.getProductById)

module.exports = router