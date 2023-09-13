const express = require('express');
const app = express();
const connection = require("./database/database");
//Database
const modelEmplyee = require("./database/employee");

connection.authenticate().then(() => {
    console.log("Conexão feita com o databas");
}).catch((msg) => {
    console.log(msg);
})

app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render("index");
});