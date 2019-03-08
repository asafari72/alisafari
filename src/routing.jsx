import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/home/home.page';
import SkillPage from './pages/skill/skill.page';
import Sidebar from './components/Sidebar/sidebar.component';
import Hidden from '@material-ui/core/Hidden';
import AboutPage from './pages/about/about.page';
import PortfolioPage from './pages/portfolio/portfolio.page';
import ContactPage from './pages/contact/contact.page';

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
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/skills" component={SkillPage} />
                        <Route exact path="/portfolio" component={PortfolioPage} />
                        <Route exact path="/contact" component={ContactPage} />


                    </div>

                </div>

            </Router>
        )
    }
}

export default routing
