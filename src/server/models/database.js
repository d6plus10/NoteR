//Script for creating test database, will probably delete due to the use of Herou's hosted dbs

/*
Script for creating database on heroku

//Table creation
 CREATE TABLE Note (
 id bigserial primary key,
 noteText text NOT NULL,
 dateAdded timestamp default current_timestamp
 );


//Add note
 INSERT INTO Note (noteText, dateAdded)
 VALUES ('Test Text', '2012-09-29 03:00:00');

//Update note
 UPDATE Note SET text = 'More test text' WHERE id=1;

//Delete note
 DELETE FROM Note WHERE id=1;

//Select note
 SELECT * from Note WHERE id=1;

 //Select several notes
 SELECT * FROM Note ORDER BY dateAdded DESC LIMIT NUM OFFSET NUM;

 */
