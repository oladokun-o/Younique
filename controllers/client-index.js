

module.exports = {
    getHome: async function (req,res) {
        res.render('client-home', {title: 'Younique Store'});
    },
    getShop: async function (req,res) {
        res.render('client-shop', {title: 'Younique: Shop'});
    },
    getAbout: async function (req,res) {
        res.render('client-about', {title: 'Younique: About Us'});
    },
    getProduct: async function (req,res) {
        let productName = 'Product Name';

        res.render('client-product', {
            title: 'Younique: ' + productName,
            product: {
                id: 'ajhq8q2icwcw',
                name: 'Denim Jacket',
                description: 'Lorem ipis snisind knsodnsndsdkksd sdiubusdibsd sidbsib dsd  sdidbsdbsdf svcikbsvc, Lorem ipis snisind knsodnsndsdkksd sdiubusdibsd sidbsib dsd  sdidbsdbsdf svcikbsvc, Lorem ipis snisind knsodnsndsdkksd sdiubusdibsd sidbsib dsd  sdidbsdbsdf svcikbsvc, Lorem ipis snisind knsodnsndsdkksd sdiubusdibsd sidbsib dsd  sdidbsdbsdf svcikbsvc, Lorem ipis snisind knsodnsndsdkksd sdiubusdibsd sidbsib dsd  sdidbsdbsdf svcikbsvc',
                category: 'jacket',
                price: '200'
            }
        });
    },
    getContact: async function (req,res) {
        res.render('client-contact', {title: 'contact'});
    },
    getFeaturedImages: async function (req,res) {
        res.send('hello')
    },
}