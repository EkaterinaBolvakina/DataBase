CREATE USER
  ekaterina
WITH
  PASSWORD 'qwerty007';
CREATE DATABASE
  lesson_1 OWNER ekaterina;
CREATE TABLE
  student (
    id serial PRIMARY KEY,
    name varchar(80),
    age integer,
    hobby varchar(80),
    profession varchar(80)
  );
INSERT INTO
  student (name, age, hobby, profession)
VALUES
  ('Ilya', 45, 'fishing', 'singer'),
  ('Alina', 32, 'traveling', 'nurse'),
  ('Ekaterina', 38, 'photography', 'economist'),
  ('Yulia', 34, 'photography', 'photography');
SELECT
  name,
  hobby
FROM
  student;

SELECT
  name
FROM
  student
WHERE
    age < 32;

DELETE FROM student;

DELETE FROM
  student
WHERE
  age = 60
  OR hobby = 'sport';

DELETE FROM student WHERE hobby = 'photography';

SELECT
  name,
  age FROM
  student
ORDER BY
  age DESC;
  
UPDATE
  students
SET
  age = 30
WHERE
  name = 'Ilya';