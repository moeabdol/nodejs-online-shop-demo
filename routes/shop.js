const express = require('express');

const productsController = require('../controllers/products');
const shopController     = require('../controllers/shop');

const router = express.Router();

router.get('/',                     productsController.getIndex);
router.get('/products',             productsController.getProducts);
router.get('/products/:productId',  productsController.getProduct);
router.get('/cart',                 shopController.getCart);
router.get('/checkout',             shopController.getCheckout);
router.get('/orders',               shopController.getOrders);

module.exports = router;
