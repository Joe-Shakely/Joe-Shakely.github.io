import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

class App extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      datas: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getData() {
    $.ajax({
      url: '/data.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ datas: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.datas.main} />
        <About data={this.state.datas.main} />
        <Resume data={this.state.datas.resume} />
        <Portfolio data={this.state.datas.portfolio} />
        {/* <Contact data={this.state.datas.main} /> */}
        <Footer data={this.state.datas.main} />
      </div>
    );
  }
}

export default App;
