CREATE TABLE
  course (
    id serial PRIMARY KEY,
    title varchar(80),
    description varchar(80),
    price int,
    duration time,
    level varchar(80)
  );

CREATE TABLE
  teacher (
    id serial PRIMARY KEY,
    firstName varchar(80),
    lastName varchar(80),
    email varchar(80),
    password varchar(80),
    specialization varchar(80),
    experience varchar(80),
    course_id int REFERENCES course (id)
  );

CREATE TABLE
  studentsGroup (id serial PRIMARY KEY, name varchar(80));

CREATE TABLE
  student (
    id serial PRIMARY KEY,
    firstName varchar(80),
    lastName varchar(80),
    email varchar(80),
    password varchar(80),
    group_id int REFERENCES studentsGroup (id)
  );
  
CREATE TABLE
  enrollment (
    id serial PRIMARY KEY,
    student_id int REFERENCES student (id),
    course_id int REFERENCES course (id),
    enrollmentDate timestamp,
    status varchar(80)
  );

INSERT INTO
  course (title, description, price, duration, level)
VALUES
  (
    'Mathematik für Anfänger',
    'Einführung in grundlegende mathematische Konzepte',
    49,
    '02:00:00',
    'Anfänger'
  ),
  (
    'Englisch für Fortgeschrittene',
    'Fortgeschrittene Englischkenntnisse und Konversation',
    69,
    '02:30:00',
    'Fortgeschritten'
  ),
  (
    'Programmierung in Python',
    'Grundlagen der Programmierung mit Python',
    79,
    '03:00:00',
    'Fortgeschritten'
  ),
  (
    'Geschichte des Mittelalters',
    'Überblick über die Geschichte des Mittelalters',
    59,
    '02:15:00',
    'Fortgeschritten'
  ),
  (
    'Kunstgeschichte',
    'Einführung in die Kunstgeschichte',
    59,
    '02:30:00',
    'Anfänger'
  );
INSERT INTO
  teacher (
    firstName,
    lastName,
    email,
    password,
    specialization,
    experience,
    course_id
  )
VALUES
  (
    'Anna',
    'Miller',
    'anna.miller@example.com',
    'password123',
    'Mathematik',
    '5 Jahre',
    1
  ),
  (
    'John',
    'Smith',
    'john.smith@example.com',
    'password456',
    'Englisch',
    '8 Jahre',
    2
  ),
  (
    'Michael',
    'Johnson',
    'michael.johnson@example.com',
    'password789',
    'Programmierung',
    '10 Jahre',
    3
  ),
  (
    'Emily',
    'Brown',
    'emily.brown@example.com',
    'password987',
    'Geschichte',
    '6 Jahre',
    4
  ),
  (
    'David',
    'Wilson',
    'david.wilson@example.com',
    'password654',
    'Kunstgeschichte',
    '4 Jahre',
    5
  );

INSERT INTO
  studentsGroup (name)
VALUES
  ('Gruppe A'),
  ('Gruppe B'),
  ('Gruppe C');

INSERT INTO
  student (firstName, lastName, email, password, group_id)
VALUES
  (
    'John',
    'Doe',
    'john.doe@example.com',
    'password123',
    1
  ),
  (
    'Jane',
    'Smith',
    'jane.smith@example.com',
    'password456',
    2
  ),
  (
    'Michael',
    'Johnson',
    'michael.johnson@example.com',
    'password789',
    3
  ),
  (
    'Emily',
    'Brown',
    'emily.brown@example.com',
    'password999',
    1
  ),
  (
    'David',
    'Wilson',
    'david.wilson@example.com',
    'password888',
    2
  ),
  (
    'Sophia',
    'Martinez',
    'sophia.martinez@example.com',
    'password777',
    3
  ),
  (
    'Daniel',
    'Anderson',
    'daniel.anderson@example.com',
    'password666',
    1
  ),
  (
    'Olivia',
    'Taylor',
    'olivia.taylor@example.com',
    'password555',
    2
  );

INSERT INTO
  enrollment (student_id, course_id, enrollmentDate, status)
VALUES
  (4, 4, '2024-05-04', 'Completed'),
  (5, 5, '2024-05-05', 'In Progress'),
  (1, 2, '2024-05-06', 'In Progress'),
  (2, 3, '2024-05-07', 'Completed'),
  (3, 4, '2024-05-08', 'In Progress'),
  (4, 1, '2024-05-05', 'In Progress'),
  (1, 1, '2024-05-06', 'In Progress'),
  (6, 4, '2024-05-07', 'Completed'),
  (8, 1, '2024-05-05', 'In Progress'),
  (7, 4, '2024-05-08', 'In Progress');

SELECT
  studentsgroup.name AS group_name,
  student.lastname,
  student.firstname,
  course.title AS course_title,
  teacher.lastname AS teacher_lastname,
  teacher.specialization,
  enrollment.enrollmentdate,
  enrollment.status
FROM
  enrollment
  JOIN student ON student.id = student_id
  JOIN course ON course.id = course_id
  JOIN studentsgroup ON studentsgroup.id = student.group_id
  JOIN teacher ON teacher.course_id = course.id
ORDER BY
  student.lastname;
