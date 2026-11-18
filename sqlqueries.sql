
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

USE collegeDB;

INSERT INTO students (student_name, department, age, email)
VALUES
('vinod Kumar', 'Computer Science', 21, 'vinod@example.com'),
('Sita Devi', 'Electronics', 22, 'sita@example.com'),
('Mahesh Babu', 'Mechanical', 23, 'mahesh@example.com'),
('Lakshmi Priya', 'Civil', 20, 'lakshmi@example.com');

SELECT * FROM students;

UPDATE students
SET age = 24
WHERE student_name = 'Mahesh Babu';

SELECT * FROM students;
