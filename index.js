const inquirer = require("inquirer");
const mysql = require("mysql");

require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:process.env.MYSQL_PASSWORD,
    database: 'tracker_db'
});

db.connect(err => {
    if (err) throw err;
    console.log("Connection Successful!")
    connected();
})

connected = () => {
    console.log (" ^^^^^^^^^^^^^^^^^^^ ")
    console.log ("|                   |")
    console.log ("|  EMPLOYEE TRACKER |")
    console.log ("|                   |")
    console.log (" ^^^^^^^^^^^^^^^^^^^ ")
    inquirerStart();    
};

const inquirerStart = () =>

