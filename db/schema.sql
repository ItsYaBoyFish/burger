-- Creating the database
create database burgers_db;
-- Set this database to priority for use.
use burgers_db;

-- Creating the table
create table burgers(
  id int AUTO_INCREMENT not null,
  burger_name varchar(100),
  devoured boolean default false,
  primary key(id)
);

