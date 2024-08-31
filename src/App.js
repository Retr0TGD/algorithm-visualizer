import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import MainPage from './components/MainPage';
import LearningPage from './components/LearningPage';
import ComparisonPage from './components/ComparisonPage';
import './App.css';

function App() {
  return (
    <Router>
      <Sidebar />
        <Routes>
          <Route path="/" exact Component={MainPage} />
          <Route path="/learning" Component={LearningPage} />
          <Route path="/comparison" Component={ComparisonPage} />
        </Routes>
    </Router>
  );
};

export default App;
