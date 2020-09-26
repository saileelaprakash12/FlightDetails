import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
               <nav class="navbar navbar-dark bg-dark container-fluid" style={{marginTop:"15px"}} expand='lg'>
                    <NavLink className='d-inline p-2 bg-dark text-white navlnk' to="/Customers"> Customers</NavLink>
                    <NavLink className=' bg-dark text-white navlnk' style={{position:"relative",right:"1078px"}} to="/FlightNumber">FlightNumber</NavLink>
                </nav>


            </div>
        )
    }
}
