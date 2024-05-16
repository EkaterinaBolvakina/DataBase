CREATE TABLE
  category (id serial PRIMARY KEY, name varchar(80));

CREATE TABLE
  product (
    id serial PRIMARY KEY,
    name varchar(80),
    price integer,
    category_id integer REFERENCES category (id)
  );
INSERT INTO
  category (name)
VALUES
  ('electronics'),
  ('clothes'),
  ('food'),
  ('toys');
INSERT INTO
  product (name, price, category_id)
VALUES
  ('tv', 1800, 1),
  ('monkey', 30, 4),
  ('iphone', 1500, 1),
  ('jeans coat', 500, 2),
  ('radio', 100, 1),
  ('lego', 25, 4),
  ;
SELECT
  product.name,
  product.price,
  category.name
FROM
  product
  JOIN category ON category.id = product.category_id;
  
CREATE TABLE
  book (
    id serial PRIMARY KEY,
    title varchar,
    author varchar,
    price int
  );

CREATE TABLE
  genre (id serial PRIMARY KEY, title varchar);

CREATE TABLE
  book_genre (
    book_id integer REFERENCES book (id),
    genre_id integer REFERENCES genre (id)
  );