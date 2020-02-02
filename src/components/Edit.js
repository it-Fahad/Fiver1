import React, { Component } from 'react'
import "./Edit.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Mediaquery.css";

export default class Edit extends Component {
    render() {
        return (
                
                   

                 <div className="main">
                     <h3 className="heading">Edit Your Profile</h3>
                     <div class="form-grid-view">
                     
                      <div>
                     <form className="form-line" autoComplete="off">
                   
                        <div>
                            <label>Name</label> </div>

                           <div>
                                <input />
                           </div>
                        

                        <div>
                            <label>Phone</label>
                       </div>

                       <div>
                           <input type="int"  />
                        </div>

                        <div>
                            <label>Address</label>
                           
                        </div>

                         <div> 
                             <input type="address" />
                        </div>

                        <div>
                            <label>Email</label>
                           
                        </div> 

                        <div>
                             <input type="email"  />
                        </div>

                        <div>
                            <label>Date of Birth</label>
                            
                        </div> 
                        
                        <div>
                            <input type="date" />
                        </div>

                      </form>
                     
                     </div>
                     <div className="image"> </div>
                     </div>

                     
                     <div>
                            <button type="submit" className="sub">Update</button>
                        </div>
                     
                      
                     
            </div>

           
           

           
            
        )
    }
}
