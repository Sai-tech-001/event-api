// server.js
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from event API!');
});

// example file read with error handling
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('File read error:', err);
    } else {
        console.log('file data:', data);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Listening on', PORT));