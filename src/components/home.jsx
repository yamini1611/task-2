import React from "react";
import logo from './logo.svg';
 import { Link } from 'react-router-dom';

function home(){
    return(
        <div >
            <Link to="ProductList">products</Link> 
            <img style={{position:'absolute'}} src={logo} alt='' height={500} width={500}></img>
            <div >
        <h1 style={{position:'relative',paddingLeft:500,paddingTop:200,fontFamily:'monospace'}}> REACT JS</h1>
        <h2 style={{position:'relative',paddingLeft:500,fontFamily:'monospace'}}>welcome to React tutorial</h2>
        <h4 style={{position:'relative',paddingLeft:500,fontFamily:'monospace'}} >by Pallavi Katari </h4></div></div>
    )
}

export default home;