const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console-table');

require('dotenv').config()

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
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

const inquirerStart = () => {
    inquirer.prompt ([
        {
            type:"list",
            name:"options",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role"
                    ]
        }
    ])
        .then((answers) => {
            const { options } = answers;

            if (options === "View all departments") {
                listDepartments();
            }

            if (options === "View all roles") {
                listRoles();
            }

            if (options === "View all employees") {
                listEmployee();
            }

            if (options === "Add a department") {
                addDepartment();
            }

            if (options === "Add a role") {
                addRole();
            }

            if (options === "Add an employee") {
                addEmployee();
            }

            if (options === "Update an Employee role") {
                updateEmployeeRole();
            }

        })
}


listDepartments = () => {
    db.query('SELECT department.name, department.id FROM department', function (err,results) {
        console.table(results);
        inquirerStart();
    });
};

listRoles = () => {
    db.query("SELECT * FROM role", function (err,results) {
        console.table(results);
        inquirerStart();
    })
};

listEmployee = () => {
    db.query ("SELECT employee.first_name, employee.last_name FROM employee", function (err,results) {
        console.table(results);
        inquirerStart();
    } )
}
