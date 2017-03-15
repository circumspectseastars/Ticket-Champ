CREATE DATABASE ticketpal;

USE ticketpal;

CREATE TABLE ticketinfo (

  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  min float(2,2) NOT NULL,
  avg float(2,2) NOT NULL,
  max float(2,2) NOT NULL,
  location varchar(255) NOT NULL,
  webID varchar(255) NOT NULL,
  api varchar(30) NOT NULL

);

CREATE TABLE apis (
  id        int    NOT NULL AUTO_INCREMENT,
  source  varchar(40)   NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/