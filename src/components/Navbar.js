import React, { Component } from 'react'
import "./Navbar.css";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <header>
            <nav className="nav">
                <div className="Logo">
                    <h4>Home</h4>
                </div>
                    <ul id="links">
                    <li><a href="/">SignIn</a></li>
                    <li class="fas fa-user-plus"><a href="/">SignUp</a></li>
                    </ul>
            </nav>
            </header>

            </div>
        )
    }
}
