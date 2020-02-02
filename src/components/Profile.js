import React, { Component } from 'react'
import NavImage from './NavImage'
import Accountlinks from './Accountlinks'
import Navbar from './Navbar'
import Detail from './Detail'
import "./Profile.css";
import Edit from './Edit'
import Footer from './Footer'
import "./Mediaquery.css";


export default class Profile extends Component {
    render() {
        return (
            <div className="profile"> 
               <header>
                <Navbar />
                </header>
            
           
                <div className="grid-pro">
                    <div className="Al"><Accountlinks/></div>
                    {/* <div><Detail/></div> */}
                    <div className="Ed"><Edit/> </div>
              </div>
              
              
              <Footer/>
               
              </div>
                
            
        )
    }
}
