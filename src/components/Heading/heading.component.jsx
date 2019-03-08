import React, { Component } from "react";
import "./heading.component.scss";
export class Heading extends Component {
  render() {
    return (
      <div className="heading">
        <h1>{this.props.title}</h1>
        <h4>{this.props.subtitle}</h4>
      </div>
    );
  }
}

export default Heading;
