import React, { Component } from 'react'
import "./Accountlinks.css";
import "./Mediaquery.css";

export default class Accountlinks extends Component {
    render() {
        return (
                <div className="account-links">
                <div className="main-account">
                    <div className="head"><h3>Account Links</h3>
                    <hr></hr>
                    </div>
                    
                    <div className="list">
                        <ul>
                            <li><a href="/">Profile</a></li>
                            <li><a href="/">Edit Profile</a></li>
                            
                        </ul>
                    </div>
                    
                </div>
                </div>
           
        )
    }
}
