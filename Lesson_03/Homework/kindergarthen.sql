CREATE TABLE
  kidsgroup (
    id serial PRIMARY KEY,
    name varchar(80) NOT NULL UNIQUE
  );

CREATE TABLE
  kid (
    id serial PRIMARY KEY,
    name varchar(80) NOT NULL,
    age integer NOT NULL,
    group_id integer REFERENCES kidsgroup (id) ON DELETE CASCADE,
    CONSTRAINT kid_age CHECK (age < 7)
  );

CREATE TABLE
  teacher (
    id serial PRIMARY KEY,
    name varchar(80) NOT NULL,
    mobnumber varchar(20) UNIQUE
  );

CREATE TABLE
  group_teacher (
    group_id integer REFERENCES kidsgroup (id) ON DELETE CASCADE,
    teacher_id integer REFERENCES teacher (id) ON DELETE CASCADE
  );

INSERT INTO
  kidsgroup (name)
VALUES
  ('Crocodile'),
  ('Monkey'),
  ('Mouse'),
  ('Fish');

INSERT INTO
  kid (name, age, group_id)
VALUES
  ('Viktor', 2, 3),
  ('Anna', 5, 4),
  --('Max', 7, 1),           -->ONLY for Check-Constraint!!!
  ('Ekaterina', 5, 1),
  ('Vitalii', 4, 1),
  ('Alina', 3, 2),
  ('Andre', 6, 1),
  ('Max', 3, 3),
  ('Michael', 1, 3),
  ('Elena', 4, 2);

INSERT INTO
  teacher (name, mobnumber)
VALUES
  ('Stefania Johson', '+491546574'),
  ('Michael Fisher', '+493567535'),
  ('Kate Middleton', '+49576466'),
  ('Vilalii Smith', '+49567489'),
  ('Max Otto', '+49566548'),
  ('Olga Popova', '+49576343');

INSERT INTO
  group_teacher (group_id, teacher_id)
VALUES
  (1, 6),
  (2, 5),
  (3, 4),
  (4, 3),
  (2, 2),
  (1, 1),
  (4, 6),
  (2, 1);

-------  HERE is SELECT nr1 NOT CORRECT -----------------------------
-- SELECT DISTINCT 
--   kidsgroup.name AS group_name,
--   STRING_AGG(teacher.name, ', ') AS teachers
-- FROM
--   kidsgroup
--   JOIN group_teacher ON kidsgroup.id = group_teacher.group_id
--   JOIN teacher ON teacher.id = group_teacher.teacher_id
--   JOIN kid ON kidsgroup.id = kid.group_id
--   GROUP BY kidsgroup.name;

-------  HERE is SELECT nr1 CORRECT :-) -----------------------------
-- SELECT
--  kidsgroup.name AS group_name,
--  STRING_AGG(DISTINCT teacher.name, ', ') AS teachers,
--  STRING_AGG(DISTINCT kid.name, ', ') AS kids
-- FROM
--  kidsgroup
--  JOIN group_teacher ON kidsgroup.id = group_teacher.group_id
--  JOIN teacher ON teacher.id = group_teacher.teacher_id
--  JOIN kid ON kidsgroup.id = kid.group_id
-- GROUP BY
--  kidsgroup.name;
--------------------------------------------------------------------
-- SELECT
--  kidsgroup.name AS group_name,
--  STRING_AGG(DISTINCT teacher.name, ', ') AS teachers,
--  STRING_AGG(DISTINCT kid.name, ', ') AS kids,
--  COUNT(DISTINCT kid.id) AS number_of_kids,
--  ROUND(AVG(DISTINCT kid.age)) AS average_age_of_kids,
--  MAX(DISTINCT kid.age) AS max_age_of_kids,
--  MIN(DISTINCT kid.age) AS min_age_of_kids
-- FROM
--  kidsgroup
--  JOIN group_teacher ON kidsgroup.id = group_teacher.group_id
--  JOIN teacher ON teacher.id = group_teacher.teacher_id
--  JOIN kid ON kidsgroup.id = kid.group_id
-- GROUP BY
--  kidsgroup.name;
----------------------------------------------------------
-- SELECT 
--  kidsgroup.name AS group_name, COUNT(kid.id) AS number_of_kids
-- FROM
--  kidsgroup
-- JOIN kid ON kidsgroup.id = kid.group_id
-- WHERE kidsgroup.name LIKE 'Mo%'
-- GROUP BY kidsgroup.name
-- HAVING COUNT(kid.id)>1
-- ;
----------------------------------------------------------------------
-- SELECT
--   kidsgroup.name AS group_name,
--   COUNT(kid.id) AS number_of_kids,
--   ROUND(AVG(kid.age)) AS average_kids_age
-- FROM
--   kidsgroup
--   JOIN kid ON kidsgroup.id = kid.group_id
-- GROUP BY
--   kidsgroup.name
-- HAVING
--   COUNT(kid.id) > 1;
----------------------------------------------------------------------  
--   SELECT
--   kidsgroup.name AS group_name,
--   COUNT(kid.id) AS number_of_kids,
--   ROUND(AVG(kid.age)) AS average_kids_age,
--   MAX(kid.age) AS max_kids_age, 
--   MIN(kid.age) AS min_kids_age 
-- FROM
--   kidsgroup
--   JOIN kid ON kidsgroup.id = kid.group_id
-- GROUP BY
--   kidsgroup.name
-- HAVING
--   COUNT(kid.id) > 1;
----------------------------------------------------------------------
 SELECT
  kidsgroup.name AS group_name,
  COUNT(kid.id) AS number_of_kids,
  ROUND(AVG(kid.age)) AS average_age_of_kids,
  MAX(kid.age) AS max_age_of_kids,
  MIN(kid.age) AS min_age_of_kids 
FROM
  kidsgroup
  JOIN kid ON kidsgroup.id = kid.group_id
  WHERE kidsgroup.name IN ('Mouse', 'Monkey')
GROUP BY
  kidsgroup.name
HAVING
  COUNT(kid.id) > 1;









