import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Navigointi.css';

const Navigointi = () => {
    const tulostaSivunNakyma = () => {
        window.print(); 
    }

    return(
        <nav>
            <div>
                <NavLink className={"navLink"} to={"/"}>Etusivu</NavLink>
            </div>
            <div>
                <NavLink className={"navLink"} to={"/UusiTuote"}>Lisää tuote</NavLink>
            </div>
            <div className={"navLink"} onClick={tulostaSivunNakyma}>Tulosta</div> 
        </nav>
    )
}

export {Navigointi}
