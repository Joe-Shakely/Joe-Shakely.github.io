import React, { Component } from "react";
// import pdf from "../pdf/resume.pdf";
import DunkContest from "./DunkContest";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="nine columns main-col">
            <DunkContest />
            <p>{bio}</p>
            <div className="row">
              {/* <div className="columns download">
                <p>
                  <a
                    href={pdf}
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <footer>
          <p className="scrolldown">
            <a className="smoothscroll" href="#resume">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </footer>
      </section>
    );
  }
}

export default About;
