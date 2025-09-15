// server.js
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from event API!');
})