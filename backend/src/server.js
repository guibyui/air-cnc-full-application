const express = require('express');
const routes = require('./routes');

const app = express();

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