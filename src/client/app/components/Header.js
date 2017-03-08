import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default" id="nav_bar">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link activeStyle={{color: "#FFFFFF"}} to={"/home"}>Home</Link></li>
                        <li><Link activeStyle={{color: "#FFFFFF"}} to={"/note"}>View Notes</Link></li>
                        <li><Link activeStyle={{color: "#FFFFFF"}} to={"/note/add"}>Add Note</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};