

module.exports = {
    getHome: async function (req,res) {
        res.render('home', {title: 'home'});
    }
}