import React from 'react';
import './App.css';
import BlogList from './components/BlogList';
import ConfessionsRules from './components/ConfessionsRules';
import ConfessForm from './components/ConfessForm';
function App() {
  return (
    <div className="App">
      <BlogList />
      <ConfessionsRules />
      <ConfessForm/>

  
    </div>
  );
}

export default App;
