import React, { Component } from 'react';
import QReport from "../pdf/Shakely Consulting Properties Q3 Demo Report.pdf";
import QImage from "../pdf/QReport.png";

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title} target="_blank">
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1><strong>Check out some of my projects</strong></h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
            <p>
              <a href={QReport} className="button" target="_blank">
                <img src={QImage} alt="QReport Text" className="fa fa-download"></img>Custom Quarterly Report
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
