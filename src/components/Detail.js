import React, { Component } from 'react'
import "./Detail.css";

export default class Detail extends Component {
    render() {
        return (
            <div className="detailcontainer">
                <div className="detail">
                    <div><h3>My profile</h3>
                    <hr></hr></div>
                    <div className="table">
                    <table className="col-2">
                        <div>
                        <tr>
                            <td>Full Name</td>
                            <td><span id="data"> Fahad Ahmed </span></td>
                       </tr>

                       <tr>
                            <td>Phone</td>
                            <td><span id="data">03342144617</span></td>

                       </tr>

                       <tr>
                            <td>Address</td>
                            <td><span id="data">XYZ BLOCK 19 </span> </td>
                       </tr>

                       <tr>
                            <td>Email</td>
                            <td><span id="data">xyz@gmail.com</span></td>
                       </tr>

                       <tr>
                            <td>DOB</td>
                            <td><span id="data">1/2/2000</span></td>
                       </tr>
                       </div>
                       <div className="img"></div>
                    </table>

                    </div>
                </div>
               

            </div>
        )
    }
}
