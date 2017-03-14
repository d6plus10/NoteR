const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
var url = require('url');

const connectionString = 'postgres://dcwkbhyjesakyx:0768fcd6d82ca170e88241008d608ce0524745cc49d8f36fdecebb6f953b52a8@ec2-54-163-234-140.compute-1.amazonaws.com:5432/d80k3v9e48bpao?ssl=true';

//Non API gets
router.get('/', (req, res, next) => {
    res.sendFile(path.join(
    __dirname, '..', '..', '..' ,'dist', 'app', 'index.html'));
});

router.get('/bootstrap.css', (req, res, next) => {
    res.sendFile(path.join(
    __dirname, '..', '..', '..' ,'dist', 'app', 'bootstrap.css'));
});

router.get('/bundle.js', (req, res, next) => {
    res.sendFile(path.join(
    __dirname, '..', '..', '..' ,'dist', 'app', 'bundle.js'));
});

router.get('/note/add', (req, res, next) => {
    res.sendFile(path.join(
        __dirname, '..', '..', '..' ,'dist', 'app', 'index.html'));
});

router.get('/note/:id', (req, res, next) => {
    res.sendFile(path.join(
        __dirname, '..', '..', '..' ,'dist', 'app', 'index.html'));
});

router.get('/home', (req, res, next) => {
    res.sendFile(path.join(
        __dirname, '..', '..', '..' ,'dist', 'app', 'index.html'));
});

router.get('/note', (req, res, next) => {
    res.sendFile(path.join(
        __dirname, '..', '..', '..' ,'dist', 'app', 'index.html'));
});

//API

//Add note
router.post('/api/note/add', (req, res, next) => {
    var receivedId = 0;
    var data = req.body.strContents; // Grab data from http request

    //Escape single quotes
    data = EscapeSingleQuotes(data);

    //DEBUG
    console.log("Received str: " + data);

    // Get a Postgres client from the connection pool
    pg.defaults.ssl = true;
    pg.connect(connectionString, (err, client, done) => {

        // Handle connection errors
        if(err) {
            done();
            console.log("Not able to connect to server\n" + err);
            return res.status(500).json({success: false, id: err});
        }
        else
        {
            console.log("Connected to server!")
        }

        // SQL Query > Add note
        client.query("INSERT INTO Note(noteText) VALUES('" + data + "') RETURNING id", function(err, result) {
            //If an error has occurred
            if(err)
            {
                console.log("Query error: " + err);
                return res.status(500).json({success: false, id: err});
            }
            //If there is no error
            else
            {
              receivedId = result.rows[0].id;

              //Successful query
              return res.json({success: false, id: receivedId});
            }
        });
    });
});

//Get one note
router.get('/api/note/:id', (req, res, next) => {
    const results = [];
    const noteId = req.params.id; //Gets the note parameter

    // Get a Postgres client from the connection pool
    pg.defaults.ssl = true;
    pg.connect(connectionString, (err, client, done) => {

        // Handle connection errors
        if(err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        // SQL Query > Select Data
        const query = client.query('SELECT * from Note WHERE id=(' + noteId + ');');

        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();

            //If nothing was selected
            if (results[0] == undefined)
            {
                return res.status(400).json({success: false, id: err});
            }

            return res.json(results[0]);
        });
    });
});

//Get several notes
router.get('/api/note', (req, res, next) => {
    const results = [];

    //Parse URL
    var limit = req.param("limit");
    var order = req.param("order");
    var start = req.param("start");

    start = start - 1; //Subtract 1 for offset syntax

    // Get a Postgres client from the connection pool
    pg.defaults.ssl = true;
    pg.connect(connectionString, (err, client, done) => {

        // Handle connection errors
        if(err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        var queryString = "SELECT * FROM Note ORDER BY dateAdded " + order;

        if (limit != undefined) {
            //Include limit in query
            queryString += " LIMIT " + limit;
        }

        queryString += " OFFSET " + start +";";

        // SQL Query > Select Data
        const query = client.query(queryString);

        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();

            //If nothing was selected
            if (results == undefined)
            {
                return res.status(400).json({success: false, id: err});
            }

            return res.json(results);
        });
    });
});

//Delete note
router.delete('/api/note/:id', (req, res, next) => {
    // Grab data from the URL parameters
    const noteId = req.params.id;

    // Get a Postgres client from the connection pool
    pg.defaults.ssl = true;
    pg.connect(connectionString, (err, client, done) => {

        // Handle connection errors
        if(err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        // SQL Query > Delete Data
        client.query('DELETE FROM Note WHERE id=' + noteId + ';');

        return res.json({success: true, data: true});
    });
});

//Update note
router.put('/api/note/:id', (req, res, next) => {

    // Grab data from the URL parameters
    const noteId = req.params.id;

    // Grab data from http request
    var contents = req.body.strContents;

    //Escape single quotes
    contents = EscapeSingleQuotes(contents);

    // Get a Postgres client from the connection pool
    pg.defaults.ssl = true;
    pg.connect(connectionString, (err, client, done) => {

        // Handle connection errors
        if(err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        //Update Note
        var query = 'UPDATE Note SET notetext = \'' + contents + '\' WHERE id=' + noteId + ';';
        console.log(query);
        client.query(query);

        return res.json({success: true, data: true});
    });
});

//404 catch
router.get('*', (req, res, next) => {
    res.sendFile(path.join(
        __dirname, '..', '..', '..' ,'dist', 'app', 'index.html'));
});

function EscapeSingleQuotes(string) {
    var replace = "'";
    var replacement = "''";
    return string.split(replace).join(replacement);
}

module.exports = router;

