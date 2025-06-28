const express = require("express");
const path = require("path");
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'tajna_sifra',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.json());

const routesHome = require('./routes/home.routes');
const routesCart = require('./routes/cart.routes');
app.use(routesHome);
app.use(routesCart);

app.listen(3000, () => {
    console.log("App is listening on http://localhost:3000");
});