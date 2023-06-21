import React from "react";
import {Link} from "react-router-dom";
function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li  className="nav-item">
                    <Link to="Home" style={{padding:15,textDecoration:"none",color:"black"}} >  Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='React' style={{padding:15,textDecoration:"none",color:"black"}}>React</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='trainees' style={{padding:15,textDecoration:"none",color:"black"}}>trainees</Link>
                           </li>
                           <li className="nav-item">
                        <Link to='data' style={{padding:15,textDecoration:"none",color:"black"}}>Users</Link>
                           </li>
                           <li className="nav-item">
                        <Link to='ProductList' style={{padding:15,textDecoration:"none",color:"black"}}>ProductList</Link>
                           </li>
                           <li className="nav-item">
                        <Link to='cart' style={{padding:15,textDecoration:"none",color:"black"}}>Cart</Link>
                           </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar