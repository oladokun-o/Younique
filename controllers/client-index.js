

module.exports = {
    getHome: async function (req,res) {
        res.render('client-home', {title: 'Younique Store'});
    },
    getShop: async function (req,res) {
        res.render('client-shop', {title: 'Younique: Shop'});
    },
    getContact: async function (req,res) {
        res.render('client-contact', {title: 'contact'});
    },
    getFeaturedImages: async function (req,res) {
        res.send('hello')
    },
}