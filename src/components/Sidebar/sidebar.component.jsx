import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export class SidebarComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="logo">
                    A.S
                </div>
                <div className="menu">
                    <NavLink exact to="/">
                        Home
                                </NavLink>
                    <NavLink exact to="/about">
                        About
                                </NavLink>
                    <NavLink exact to="/skills">
                        Skills
                                </NavLink>
                    <NavLink exact to="/portfolio">
                        Portfolio
                                </NavLink>
                    <NavLink exact to="/contact">
                        Contact
                                </NavLink>
                </div>
                <div className="social-networks">
                    <br></br>
                </div>
            </React.Fragment>
        )
    }
}

export default SidebarComponent
