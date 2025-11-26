const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('combined'));
app.use('/pdf', express.static(path.join(__dirname, 'pdfs')));

app.get('/verify/AKMMF0985JMMFHFHDSSD', (req, res) => {
    res.sendFile(path.join(__dirname, 'canche.html'));
});

app.get('/verify/KJNNDJURHFJDNDJFHFBD', (req, res) => {
    res.sendFile(path.join(__dirname, 'saul.html'));
});

app.listen(PORT, () => {
    console.log(`Server started`);
});
