--CREATE DATABASE trainig;

-- custom type
CREATE TYPE brands AS ENUM('Ford', 'Toyota', 'Mazda', 'Honda' );

CREATE TYPE colors AS ENUM('red', 'black', 'white', 'green', 'yellow' );

CREATE TABLE cars (
    id INT PRIMARY KEY,
    brand brands,
    color colors,
    isNew BOOLEAN,
    price FLOAT

)