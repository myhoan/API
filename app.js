const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//get
app.get('/', (req, res) => {
    res.send('on home');
});

//Connect to mongodb 
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log('connected to MongoDB')
);

//Listening server
app.listen(3000);