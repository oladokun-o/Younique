const programmingLanguages = require('../services/lan');

module.exports = {
    getLanguages: async function (req, res) {
        try {
            res.json(await programmingLanguages.getMultiple(req.query.page));
          } catch (err) {
            res.status(500).redirect('error')
            console.error(`Error while getting programming languages:`, err.message);            
          }
    },
    postLanguage: async function (req, res) {
      try {
        res.json(await programmingLanguages.create(req.body));
      } catch (err) {
        res.status(500).redirect('error')
        console.error(`Error while creating programming language:`, err.message);        
      }
    },
    updateLan: async function (req, res) {
      try {
        res.json(await programmingLanguages.update(req.params.id, req.body));
      } catch (err) {
        res.status(500).redirect('error')
        console.error(`Error while updating programming language:`, err.message);        
      }
    },
    deleteLan: async function (req, res) {
      try {
        res.json(await programmingLanguages.remove(req.params.id));
      } catch (err) {
        res.status(500).redirect('error')
        console.error(`Error while deleting programming language:`, err.message);        
      }
    }
}