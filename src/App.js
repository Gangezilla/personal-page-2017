import React, { Component } from 'react';
import Header from './Components/Header';
import PersonalSummary from './Components/PersonalSummary';
import Work from './Components/Work';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      work: [],
      education: [],
      projects: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const endpoints = ['/work/', '/education/', '/projects/'];
    // Promise.all(endpoints.map((endpoint) => {
    //   return new Promise((resolve, reject) => {
    //     fetch(endpoint)
    //       .then(res => res.json())
    //       .then((json) => {
    //         resolve(json);
    //       })
    //       .catch(err => reject(err));
    //   });
    // }))
    //   .then((data) => {
    //     this.setState({
    //       work: data[0],
    //       education: data[1],
    //       projects: data[2],
    //     });
    //   });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <PersonalSummary />
        <Work data={this.state.work} />
        <Education data={this.state.education} />
        <Projects data={this.state.projects} />
        <Footer />
      </div>
    );
  }
}

export default App;
