const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}));
const control = require('../controllers/admin-index')
router
    .get('/', control.getLanguages)
    .post('/lan', control.postLanguage)
    .put('/:id', control.updateLan)
    .delete('/:id', control.deleteLan)

module.exports = router;