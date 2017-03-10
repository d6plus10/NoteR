const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');

const connectionString = 'postgres://jmzgodmvcjdpou:f2a5e054e7e55f8da9b08376c33174fe33e623922404f4a0934fb8d69d854bcc@ec2-107-22-244-62.compute-1.amazonaws.com:5432/d5mjfmmfviod98?ssl=true';

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

//Get note
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
        client.query('DELETE FROM Note WHERE id=(' + noteId + ');');

        return res.json({success: true, data: true});
    });
});

//Update note
router.put('/api/note/:id', (req, res, next) => {

    // Grab data from the URL parameters
    const noteId = req.params.id;

    // Grab data from http request
    const contents = req.body.strContents;

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

module.exports = router;
