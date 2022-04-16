const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
const control = require('../controllers/client-index')
router
    .get('/', control.getHome)

module.exports = router;