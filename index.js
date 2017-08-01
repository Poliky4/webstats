const express = require('express');

const app = express();

// Returns requested webstats
app.get('/webstats', (req, res) => {
    res.send('Eyo!');
});

// Stores received webstats
app.post('/webstats', (req, res) => {
    console.log('POST!')
    console.log(req)
    console.log(res)
    res.send('Eyo!');
});

app.listen(1337, _ => {
    console.log('Webstats starting on port 1337 at', new Date().toUTCString());
});