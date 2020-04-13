const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const mongoConnect = require('./utils/database');

const app = express()
const port = 8000;

app.get('/', (req, res) => res.send('Hello World!!'))


mongoConnect((client) => {
    console.log(client);
    app.listen(port, () => console.log(`Server is running on port ${port}`))

});