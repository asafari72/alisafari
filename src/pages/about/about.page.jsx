import React, { Component } from "react";
import "./about.page.scss";
import Heading from "../../components/Heading/heading.component";
export class AboutPage extends Component {
  render() {
    return (
      <div>
        <Heading title="About Me" subtitle="More about me ..." />
        <p>I’ve become familiar with programing and designing from 1387(2008) And could improve my skills in UI and Web .I started my work with Theme design for WordPress CMS. After a while I lunched programming with PHP and now I do web programming. Now I am working with JAVASCRIPT, JQUARY, HTML, CSS and PHP. I am working as designer and Web programmer in Timeplicity Company and do personal orders for companies and individuals.</p>
      </div>
    );
  }
}

export default AboutPage;
