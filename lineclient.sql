
CREATE DATABASE collegeDB;

USE collegeDB;

CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(50),
    department VARCHAR(50),
    age INT,
    email VARCHAR(100)
);

SHOW TABLES;

DESCRIBE students;
