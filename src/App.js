import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';
import Home from './components/Home';
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const pageSize = 5;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={1} color='#f11946' progress={progress} />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route
            exact
            path="/Business"
            element={<News setProgress={setProgress} key="Business" pageSize={pageSize} country="in" category="Business" />}
          />
          <Route
            exact
            path="/General"
            element={<News setProgress={setProgress} key="General" pageSize={pageSize} country="in" category="General" />}
          />
          <Route
            exact
            path="/Health"
            element={<News setProgress={setProgress} key="Health" pageSize={pageSize} country="in" category="Health" />}
          />
          <Route
            exact
            path="/Science"
            element={<News setProgress={setProgress} key="Science" pageSize={pageSize} country="in" category="Science" />}
          />
          <Route
            exact
            path="/Sports"
            element={<News setProgress={setProgress} key="Sports" pageSize={pageSize} country="in" category="Sports" />}
          />
          <Route
            exact
            path="/Technology"
            element={<News setProgress={setProgress} key="Technology" pageSize={pageSize} country="in" category="Technology" />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
