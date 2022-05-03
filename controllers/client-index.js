

module.exports = {
    getHome: async function (req,res) {
        res.render('client-home', {title: 'Younique Store'});
    },
    getContact: async function (req,res) {
        res.render('client-contact', {title: 'contact'});
    }
}