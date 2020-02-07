const express = require('express');
const path = require('path');


const session = require('express-session');
const SessionStore = require('connect-mongodb-session')(session);

const homeRouter = require('./routes/home.routes');
const authRouter = require('./routes/auth.route');
const productRouter = require('./routes/product.route');

const app = express();

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'images')));

const STORE = new SessionStore({
    uri: 'mongodb://localhost:27017/online-shop',
    collection: 'sessions'
})

app.use(session({
    secret: 'this is my secret secret to hash express session .....',
    saveUninitialized: false,
    resave: false,
    store: STORE
}))

app.set('view engine', 'ejs');
app.set('views', 'views'); // Default

app.use('/', homeRouter);
app.use('/', authRouter);
app.use('/product', productRouter);

app.listen(3000, () => {
    console.log('Server listen on port 3000')
})