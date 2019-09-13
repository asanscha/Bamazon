require("dotenv").config();
var mysql = require('mysql');
var inquirer = require('inquirer');
var pass = require("./pass.js");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "bamazon"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Success!");
});

