const express = require('express');
const dicionario = require('./routes/dicionario');
require('./database')
const app = express();

app.use(express.json());
app.use(dicionario);

app.listen(3333);