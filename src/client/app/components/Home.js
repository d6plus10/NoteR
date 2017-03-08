import React from "react";

export const Home = (props) => {
    return (
        <div>
            <div className="jumbotron">
            <h1>Welcome to NoteR</h1>
            <p>NoteR is a web application that lets you store notes.</p>

            <p>Features</p>
            <ul>
                <li>Add a note: Adds a new note to the database</li>
                <li>View a note: Search for note(s) in the database via an id to see contents</li>
                <li>Update a note: Modify the contents of an existing note in the database</li>
                <li>Delete a note: Delete an existing note in the database</li>
            </ul>
            </div>
        </div>
    );
};