const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
const control = require('../controllers/admin-index')
router
    .get('/', control.getAdmin)
    .get('/login', control.getLogin)
module.exports = router;