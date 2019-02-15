import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/home/home.page';
import SkillPage from './pages/skill/skill.page';
import Sidebar from './components/Sidebar/sidebar.component';
import Hidden from '@material-ui/core/Hidden';

export class routing extends Component {
    render() {
        return (
            <Router>

                <div className="wrapper">
                <Hidden mdDown>
                    <div className="left-side">
                       <Sidebar></Sidebar>
                    </div>
                    </Hidden>
                    <div className="right-side">
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/skills" component={SkillPage} />
                    </div>

                </div>

            </Router>
        )
    }
}

export default routing
