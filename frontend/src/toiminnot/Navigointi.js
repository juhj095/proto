import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Navigointi.css';

const Navigointi = () => {
    return(
        <nav>
            <div>
                <NavLink className={"navLink"} to={"/"}>Etusivu</NavLink>
            </div>
            <div>
                <NavLink className={"navLink"} to={"/UusiTuote"}>Lisää tuote</NavLink>
            </div>

        </nav>
    )

}

export {Navigointi}