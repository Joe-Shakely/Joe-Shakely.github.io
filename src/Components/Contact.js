import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var Burlingame = this.props.data.address.Burlingame;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
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
          <div className="eight columns">
            <form action="" method="post" id="contactFormEn" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    placeholder="Your Name *"
                    type="text"
                    size="35"
                    id="contactName"
                    name="contactName"
                    autoComplete="given-name"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    placeholder="Your Email *"
                    type="text"
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    autoComplete="email"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactPhone">Phone Number<span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Phone Number *"
                    required="required"
                    size="35"
                    id="contactPhone"
                    name="contactPhone"
                    autoComplete="tel-national"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    placeholder="Your Message *"
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    required="required"
                    name="contactMessage"
                    autoComplete="none"
                  ></textarea>
                </div>

                <div>
                  <button id="sendMessageButtonEn" className="submit">
                    Submit
                  </button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>
            <div id="message-success">
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {Burlingame}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
