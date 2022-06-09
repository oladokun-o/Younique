const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
const control = require('../controllers/client-index')
router
    .get('/', control.getHome)
    .get('/contact', control.getContact)
    .get('/featured_images', control.getFeaturedImages)
    .get('/shop', control.getShop)
    .get('/about', control.getAbout)
    .get('/product/:id', control.getProduct)
module.exports = router;