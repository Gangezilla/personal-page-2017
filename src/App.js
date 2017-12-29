import React from 'react';
import glamorous from 'glamorous';
import Header from './Components/Header';
import PersonalSummary from './Components/PersonalSummary';
import Work from './Components/Work';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

import './App.css';
import './collapsible.css';

const DataContainer = glamorous.div({
  margin: '20px auto',
  display: 'flex',
  maxWidth: '800px',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  flexDirection: 'column',
  padding: '0 20px',
});

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
    const hostname = window && window.location && window.location.hostname;
    console.log(hostname);
    if (hostname !== 'localhost') {
      this.fetchData();
    }
  }

  fetchData() {
    const endpoints = ['/work/', '/education/', '/projects/'];
    Promise.all(endpoints.map((endpoint) => {
      return new Promise((resolve, reject) => {
        fetch(endpoint)
          .then(res => res.json())
          .then((json) => {
            resolve(json);
          })
          .catch(err => reject(err));
      });
    }))
      .then((data) => {
        this.setState({
          work: data[0],
          education: data[1],
          projects: data[2],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PersonalSummary />
        <DataContainer>
          <Work data={this.state.work} />
          <Projects data={this.state.projects} />
          <Education data={this.state.education} />
        </DataContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
