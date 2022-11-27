import React, { Component } from "react";
import "../../css/home.css";
import {
  DownCircleTwoTone,
  DownCircleOutlined,
  DownCircleFilled,
} from "@ant-design/icons";

class home extends Component {
  render() {
    const startDate = new Date("7/11/2016");
    const today_date = new Date();
    const differnce = (today_date - startDate) / 1000;
    const years = differnce / (60 * 60 * 24 * 365.25);
    const diffyear = Math.floor(years);
    const diffMonth = Math.floor((years - diffyear) * 12);
    return (
      <div className="container home-container transition-left-to-right">
        <div className="fixed-bottom-scroll" onClick={this.scrollClick}>
          <DownCircleFilled />
        </div>
        <div className="row">
          <section className="main-first">
            <h2 className="main-title"> Hi, I'm Prakhar Patidar</h2>
            <p className="main-content">
              I am a <b>Data Scientist</b> by profession. Currently working at
              Reliance Jio. I am an alumna of{" "}
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
              . In my {diffyear} years and {diffMonth} months of software
              industry experience not only I have worked on various data science
              technologies and frameworks, but also got my hands dirty on
              front-end, back-end, DevOps, Big data and system integration
              technolgoies. Latest technologies trends and integration
              techniques easily attracts me to try them out and take better
              decisions for software development.
            </p>
          </section>
          {/* <section>
                        <h2 className='main-title'> Fun facts about me!</h2>
                        <p className='main-content'>
                            I am a <b>Data Scientist</b> by profession. In my {diffyear} years and {diffMonth} months of software industry experience not only
                            I have worked on various data science technologies, but also got my hands dirty on few FrontEnd, BankEnd, DevOps, Big data and system integration technolgoies.
                            Latest technologies and integration techniques easily attracts me to try them out and take better decisions for software development.
                        </p>
                    </section> */}
        </div>
      </div>
    );
  }
}

export default home;
