const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => { console.log(`Listening on ${port}`); });
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(express.json({limit: '5mb'}));