const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.post('/add-product',productController.addProduct)

router.get('/get-products',productController.getProducts)

router.put('/update-product/:id',productController.updateProduct)

router.delete('/delete-product/:id',productController.deleteProduct)

module.exports = router
