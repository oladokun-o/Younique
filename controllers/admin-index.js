const programmingLanguages = require('../services/lan');

module.exports = {
    getAdmin: async function (req, res) {
       res.render('admin-home', {
         title: 'Admin',
         page: 'dashboard',
         username: 'Alfred',
         firstname: 'Alfred',
         lastname: 'Omogunloye',
       });
    },
    getLogin: async function (req, res) {
      res.render('admin-login', {
        title: 'login'
      });
    },
    getPages: async function (req, res) {
      let dest = req.params.dest.replace(/:/g, '');
      res.render('admin-'+ dest , {
        title: dest,
      })
    },
    getPreviousPage: async function (req, res) {
      let dest = req.params.dest.replace(/:/g, ''), url = req.body.url.replace(/#/g, '');
      console.log(req.body)
      res.render('admin-home', {
        title: dest,
        page: dest
      })
    }
}