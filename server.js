// Load env variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const routes = require('./controllers');

const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());

app.use(routes);

app.get("*", ( _ , res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});