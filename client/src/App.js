import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Facebook from './components/Facebook';
import PostContextProvider from './context/PostContext'

function App() {
  return (
    <PostContextProvider>
      <Router>
      <Route path="/" exact component={Facebook} />
    </Router>
    </PostContextProvider>
  );
}

export default App;
