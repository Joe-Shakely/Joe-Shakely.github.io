import React, { Component } from 'react';
import Projects from "./Projects";

class Portfolio extends Component {
  render() {
    let className = 'menu';
    if (this.props.isActive) {
      className += ' menu-active';
    }
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return
        <div key={projects.title} className="columns portfolio-item">
            <video />
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>
                <Projects />
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
