-- custom type
CREATE TYPE employment_status AS ENUM('employed', 'self-employed', 'unemployed');

CREATE TABLE users (
    id INT PRIMARY KEY,
    full_name VARCHAR(150),
    salary INT,
    current_status employment_status
)
