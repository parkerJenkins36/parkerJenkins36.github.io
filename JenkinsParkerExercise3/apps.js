const express = require('express');
const { v4: uuidv4 } = require('uuid');
const morgan = require('morgan');
const { upload } = require('./middleware/fileUpload');
const app = express();
let port = 3000;
let host = 'localhost'; 

app.set('view engine', 'ejs');


let students = [
    { id: '1', name: 'Alice', major: 'Computer Science', gpa: 3.2 },
    { id: '2', name: 'Bob', major: 'Biology', gpa: 3.0 },
    { id: '3', name: 'Charlie', major: 'Physics', gpa: 3.8 }
];


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/students', (req, res) => {
    res.render('students', { students });
});

app.post('/students', upload, (req, res) => {
    let student = req.body;
    student.id = uuidv4();
    student.profile = '/images/' + req.file.filename;
    students.push(student);
    res.redirect('/students');
});

app.get('/students/new', (req, res) => {
    res.render('new');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/contact', (req, res) => {
    res.send('Contact page');
});

app.get('/contact-me', (req, res) => {
    res.redirect(301, '/contact');
});

app.listen(port, host, () => {
    console.log('The server is running at port', port);
});