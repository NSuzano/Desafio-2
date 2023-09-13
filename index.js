const express = require('express');
const app = express();
const connection = require("./database/database");

app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render("index");
});