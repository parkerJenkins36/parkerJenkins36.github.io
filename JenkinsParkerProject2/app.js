const express = require('express');
const morgan = require('morgan');
const { upload } = require('./middleware/fileUpload');
const methodOverride = require('method-override');
const cardRoutes = require('./routes/cardRoutes'); 


const app = express();


const port = 3000;
const host = 'localhost';
app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.render('index');
});


app.use('/cards', cardRoutes); 


app.use((req, res, next) => {
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404; // Set status to 404
    next(err); // Pass the error to the next middleware
});


app.use((err, req, res, next) => {
    console.log(err.stack);
    if (!err.status) {
        err.status = 500; // Internal Server Error
        err.message = "Internal Server Error";
    }
    res.status(err.status);
    res.render('error', { error: err });
});


app.listen(port, host, () => {
    console.log('Server is running on port', port);
});
