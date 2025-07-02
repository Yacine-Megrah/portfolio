"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3600;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
