import React from 'react';
import Header from './Components/Header';
import PersonalSummary from './Components/PersonalSummary';
import Work from './Components/Work';
import Footer from './Components/Footer';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <PersonalSummary />
    <Work />
    <Footer />
  </div>
);

export default App;
