const express = require('express');
const app = express();

const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(morgan('combined'));
app.use('/pdf', express.static('pdfs'));

app.get('/verify/AKMMF0985JMMFHFHDSSD', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Server started`);
});
