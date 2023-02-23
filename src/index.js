const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan')
const { engine } = require('express-handlebars');

app.use(express.static('./src/public'));
app.use(morgan('combined'));
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})