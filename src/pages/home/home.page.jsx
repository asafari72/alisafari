import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import "./home.page.scss"
import Typist from '../../components/Typing/typing.component';

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-page">
          <div className="home-image">
          </div>
          <div className="home-title">
            <h1>Ali<span> Safari</span>
             
            </h1>
            <Typist
              dataText={["Seniro Front-End Developer", "UI & UX Desinger", "Graphic Designer"]} ></Typist>
          </div>
        </div>
        {/* <Typist
          dataText={["Seniro Front-End Developer", "UI & UX Desinger", "Graphic Designer"]} ></Typist> */}
      </React.Fragment>
    );
  }
}

export default withRouter(HomePage);
