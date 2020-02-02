import React, { Component } from 'react'
import "./Signup.css";
import Navbar from './Navbar';
import Footer from './Footer';

export default class Signup extends Component {
    render() {
        return (
            <div>
                <div> <Navbar/>  </div>
                <div className="Container">
                    <div className="row1">
                        <div className="imagepreview">  </div>
                        <div><button className="upload" type="button">Upload Image</button></div>
                        
                    </div>

                    <div className="form-page">
                        <form>
                            <div className="row2">
                                <label>Full Name</label>
                                <input className="input" autoComplete="off" type="text"  />
                            </div>

                            <div className="row2">
                                <label>Phone Number</label>
                                <input className="input" autoComplete="off" type="num" />
                            </div>

                            <div className="row2">
                                <label>Address</label>
                                <input className="input" autoComplete="off" type="text" />
                            </div>

                            <div className="row2">
                                <label>Email</label>
                                <input className="input" autoComplete="off" type="Email" />
                            </div>

                            <div className="row2">
                                <label>Date of Birth</label>
                                <input className="input" autoComplete="off" type="date" />
                            </div>

                            <div className="question">
                                 <div><label>Security Question</label></div>
                                    
                                 <div>
                                    <label >Q1. What is your mother name?</label> 
                                    <br></br>
                                    <label >Q2. What is your mother name?</label>
                                    <br></br>
                                    <label >Q3. What is your mother name?</label>
                                </div>
                               
                                 <div> 
                                     <input type="text" autoComplete="off" className="inputquestion"/>
                                   
                                     <input type="text" autoComplete="off" className="inputquestion"/>
                                     
                                     <input type="text" autoComplete="off" className="inputquestion" /> 
                                </div>
                            </div>

                            <button type="submit" className="submit">Submit</button>
                        </form>

                    </div>



                </div>
                <div> <Footer/> </div>
            </div>
        )
    }
}
