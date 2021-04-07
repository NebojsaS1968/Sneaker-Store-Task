-- Creating a database
CREATE DATABASE sneakers;

-- Switching to that database
-- \c sneakers
-- prompt should look like this => sneakers=#

-- creating table for all/homepage sneakers
CREATE TABLE all_sneakers (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price BIGINT NOT NULL
);

-- creating table for history sneakers
CREATE TABLE history (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price BIGINT NOT NULL
);

-- inserting some sneakers data
INSERT INTO all_sneakers (name, price) VALUES ('Nike Air Jordan', 20000);
INSERT INTO all_sneakers (name, price) VALUES ('DEČIJE PATIKE NIKE COURT BOROUGH LOW', 3992);
INSERT INTO all_sneakers (name, price) VALUES ('ŽENSKE PATIKE PUMA SOFTRIDE SOPHIA RECYCLED WNS', 6632);
INSERT INTO all_sneakers (name, price) VALUES ('MUŠKE PATIKE PUMA FUTURE 6.4 IT', 3876);