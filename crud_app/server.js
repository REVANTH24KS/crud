const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require("body-parser"); // Corrected typo
const path = require('path');
const app = express();


const connectDB = require('./server/database/connection');

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

// Log requests
app.use(morgan('tiny'));

//mongo connection
connectDB();

// Parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine
app.set("view engine", "ejs");

// Load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

//load router
app.use('/',require('./server/routes/router'))


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
