DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
 -- id - INT PRIMARY KEY
    id INT AUTO_INCREMENT,
-- name - to hold department name
    name  VARCHAR(30),
    PRIMARY KEY(id)   
);

CREATE TABLE role(
-- id - INT PRIMARY KEY
    id INT AUTO_INCREMENT,
-- name - to hold role title
    title VARCHAR(30),
-- salary - DECIMAL to hold role salary
    salary DECIMAL,
-- department_id - INT to hold reference to department role belongs to
    department_id INT,   
    PRIMARY KEY(id)
);

CREATE TABLE employee(
-- id - INT PRIMARY KEY
    id INT AUTO_INCREMENT,
-- first name - to hold employee first name
    first_name  VARCHAR(30),
-- last name -  to hold employee last name
    last_name VARCHAR(30),
-- role_id - to hold reference to role employee has
    role_id  INT,
-- manager_id  - to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
    manager_id  INT,
    PRIMARY KEY(id)
);