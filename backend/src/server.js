const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://aircnc:aircnc@aircnc-nwqli.mongodb.net/aircncdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// GET: Receive information, 
// POST: Create information, 
// PUT: Edit information, 
// DELETE

// req.query = Access query params (For filters)
// req.params = Access route params (For editing and delete)
// req.body = Access request body (For creation and editing)

app.use(express.json());
app.use(routes);


app.listen(3333);