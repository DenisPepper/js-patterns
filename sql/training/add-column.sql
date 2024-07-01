
CREATE TYPE transmission_type AS ENUM('automatic', 'cvt', 'robot', 'manual' );

ALTER TABLE cars ADD COLUMN transmission transmission_type;