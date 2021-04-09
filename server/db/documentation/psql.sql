-- Creating a database
CREATE DATABASE sneakers;

-- Switching to that database
-- \c sneakers
-- prompt should look like this => sneakers=#

-- creating table for all/homepage sneakers
CREATE TABLE all_sneakers (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price BIGINT NOT NULL,
    img VARCHAR(200) NOT NULL
);

-- creating table for history sneakers
CREATE TABLE history (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price BIGINT NOT NULL,
    img VARCHAR(200) NOT NULL
);

-- inserting some sneakers data
INSERT INTO all_sneakers (name, price, img) VALUES ('Nike Air Jordan', 20000, 'https://www.n-sport.net/UserFiles/products/big/08/01/decije-patike-nike-jordan-access-bg-AV7941-001.jpg');
INSERT INTO all_sneakers (name, price, img) VALUES ('DEČIJE PATIKE NIKE COURT BOROUGH LOW', 3992, 'https://www.n-sport.net/UserFiles/products/big/03/25/decije-patike-nike-court-borough-low-gs--839985-001.jpg');
INSERT INTO all_sneakers (name, price, img) VALUES ('ŽENSKE PATIKE PUMA SOFTRIDE SOPHIA RECYCLED WNS', 6632, 'https://www.n-sport.net/UserFiles/products/big/01/28/zenske-patike-puma-softride-sophia-recycled-wn-s-194862-02.jpg');
INSERT INTO all_sneakers (name, price, img) VALUES ('MUŠKE PATIKE PUMA FUTURE 6.4 IT', 3876, 'https://www.n-sport.net/UserFiles/products/big/08/25/muske-patike-puma-future-6-4-it-106199-01.jpg');