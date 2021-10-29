import express from 'express';
import bodyParser from 'body-parser';
import {routing} from '../routing';
const mongoose = require('mongoose');
import {config} from '../config/config';

let app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(function (req, res, next) {
    const body = JSON.stringify(req.body, null, 4);
    console.log('Request body: ---------->')
    console.log(body)
    next();
});

routing.init(app)

app.use(express.static('public'));

mongoose.connect(config.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true,
})


app.get('*', (req, res) => {
    res.redirect('/');
});

export default app;
