import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="twelve columns">
            <iframe
              title="ContactMeForm"
              src="https://docs.google.com/forms/d/e/1FAIpQLSeO0InJ0t_HmlffPvfVKAVFwHIWkwQBRfOtpaM2E-NxeSI7ZA/viewform?embedded=true"
              width="640"
              height="640"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    );
    // return (
    //   <section id="contact">
    //     <div className="row section-head">
    //       <div className="two columns header-col">
    //         <h1>
    //           <span>Get In Touch.</span>
    //         </h1>
    //       </div>

    //       <div className="ten columns">
    //         <p className="lead">{message}</p>
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="twelve columns">
    //         <form action="" method="post" id="contactFormEn" name="contactForm">
    //           <fieldset>
    //             <div>
    //               <label htmlFor="contactName">
    //                 Name <span className="required">*</span>
    //               </label>
    //               <input
    //                 placeholder="Your Name *"
    //                 type="text"
    //                 size="35"
    //                 id="contactName"
    //                 name="contactName"
    //                 autoComplete="given-name"
    //                 onChange={this.handleChange}
    //               />
    //             </div>

    //             <div>
    //               <label htmlFor="contactEmail">
    //                 Email <span className="required">*</span>
    //               </label>
    //               <input
    //                 placeholder="Your Email *"
    //                 type="text"
    //                 size="35"
    //                 id="contactEmail"
    //                 name="contactEmail"
    //                 autoComplete="email"
    //                 onChange={this.handleChange}
    //               />
    //             </div>

    //             <div>
    //               <label htmlFor="contactPhone">Phone Number<span className="required">*</span>
    //               </label>
    //               <input
    //                 type="tel"
    //                 placeholder="Your Phone Number *"
    //                 required="required"
    //                 size="35"
    //                 id="contactPhone"
    //                 name="contactPhone"
    //                 autoComplete="tel-national"
    //                 onChange={this.handleChange}
    //               />
    //             </div>

    //             <div>
    //               <label htmlFor="contactMessage">
    //                 Message <span className="required">*</span>
    //               </label>
    //               <textarea
    //                 placeholder="Your Message *"
    //                 cols="50"
    //                 rows="15"
    //                 id="contactMessage"
    //                 required="required"
    //                 name="contactMessage"
    //                 autoComplete="none"
    //               ></textarea>
    //             </div>

    //             <div>
    //               <button id="sendMessageButtonEn" className="submit">
    //                 Submit
    //               </button>
    //               <span id="image-loader">
    //                 <img alt="" src="images/loader.gif" />
    //               </span>
    //             </div>
    //           </fieldset>
    //         </form>
    //         <div id="message-success">
    //           <br />
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // );
  }
}

export default Contact;
