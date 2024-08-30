import React from "react";
import '../styles/styles.css'
import '../styles/outils.css'
import "../styles/components/header.css";



export default function Header(){
    return(<>
    <header className="header">
        <img className="logo" src="logoMeow.png" alt ="movieduxLogo"/>
        <h1 className="app-subtitle">It's time for Popcorn! Find your next movie here. </h1>
    </header>
    </>)
}