const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
const control = require('../controllers/admin-index')
router
    .get('/home', control.getAdmin)
    .post('/page/:dest', control.getPages)
    .get('/home/:dest', control.getPreviousPage)
    .get('/login', control.getLogin)
module.exports = router;