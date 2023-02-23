const newsController = require('./app/controllers/NewsController');

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });
    
    app.get('/news', newsController.index);    
}

module.exports = route;