DROP DATABASE IF EXISTS burgers_db;
-- Create a database called 'burgers_db' and switch into it --
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE  burgers (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN NOT NULL, 
  PRIMARY KEY (id)
);

