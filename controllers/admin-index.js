const programmingLanguages = require('../services/lan');

module.exports = {
    getAdmin: async function (req, res) {
       res.render('admin-home', {
         title: 'Admin'
       });
    },
    getLogin: async function (req, res) {
      res.render('admin-login', {
        title: 'login'
      });
    }
}