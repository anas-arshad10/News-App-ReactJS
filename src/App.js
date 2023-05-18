import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/Home" element={<Home />}/>
            <Route exact path="/Business" element={<News key="Business" pageSize={5} country="in" category="Business" />} />
            <Route exact path="/General" element={<News key="General" pageSize={5} country="in" category="General" />} />
            <Route exact path="/Health" element={<News key="Health" pageSize={5} country="in" category="Health" />} />
            <Route exact path="/Science" element={<News key="Science" pageSize={5} country="in" category="Science" />} />
            <Route exact path="/Sports" element={<News key="Sports" pageSize={5} country="in" category="Sports" />} />
            <Route exact path="/Technology" element={<News key="Technology" pageSize={5} country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
