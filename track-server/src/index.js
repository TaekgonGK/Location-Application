require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const requireAuth = require('./middlewares/requireAuth');


const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = 'mongodb+srv://admin:passwordpassword@lcationcluster.fhu6dfa.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});

//http request calls this function
app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});