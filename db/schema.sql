DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE department (
    id int PRIMARY KEY NOT NULL,
    name VARCHAR(30)
);
CREATE TABLE role (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(30),
    salary DECIMAL 
    department_id INT 
);
CREATE TABLE employee (
    id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);
