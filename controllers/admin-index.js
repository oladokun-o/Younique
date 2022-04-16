const programmingLanguages = require('../services/lan');

module.exports = {
    getLanguages: async function (req,res) {
        try {
            res.json(await programmingLanguages.getMultiple(req.query.page));
          } catch (err) {
            res.status(500).redirect('error')
            console.error(`Error while getting programming languages `, err.message);
            next(err);
          }
    }
}