const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());

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