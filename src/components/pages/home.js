import React, { Component } from "react";
import "../../css/home.css";
import data from "../../data/site_content.json";

class home extends Component {
  render() {
    const home_data = data["home"];
    const startDate = new Date(home_data["career_start_date"]);
    const today_date = new Date();
    const differnce = (today_date - startDate) / 1000;
    const years = differnce / (60 * 60 * 24 * 365.25);
    const diffyear = Math.floor(years);
    const diffMonth = Math.floor((years - diffyear) * 12);
    return (
      <div className="container home-container transition-left-to-right">
        <div className="row">
          <div className="main-first">
            <h1 className="main-title"> Hi. I'm Prakhar.</h1>
            <h1 className="main-title">A Machine Learning Enginner.</h1>
            <p className="main-content">
              Currently working at
              <b> {home_data["current_compay"]}</b>. I am an alumna of{" "}
              <a
                href="https://en.wikipedia.org/wiki/Indian_Institute_of_Technology_Roorkee"
                target="_location"
              >
                IIT Roorkee{" "}
              </a>
              and{" "}
              <a
                href="https://en.wikipedia.org/wiki/M.B.M._Engineering_College"
                target="_location"
              >
                MBM engineering college, Jodhpur
              </a>
              . In my {diffyear} years and {diffMonth} months of IT
              industry experience I have worked on various technolgoies and frameworks. Most of these falls under 
              data science and machine learning.
              I also have hands on experience in various
              front-end, back-end, dev-ops, big data and system integration
              technolgoies. Latest technologies trends and frameworks easily attracts me to try them out and take better
              decisions for software development.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
