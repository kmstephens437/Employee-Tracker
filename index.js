const inquirer = require('inquirer');
const mysql = require('mysql');

require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password:'',
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
    db.query('SELECT * FROM department', function (err,results) {
        console.log(results);
    });
};

