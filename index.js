const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({}));
app.use(express.json());
app.use('/api/members', require('./routes/members'));

const PORT = process.env.PORT || 1828;

app.listen(PORT, () => { console.log(`server has started on port ${PORT}`) });