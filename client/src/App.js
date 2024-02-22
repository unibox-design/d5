import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import './App.css';
import Header from './Header'; 
import Hero from './Hero';
import SelectGame from './SelectGame';

function App() {

  return (
    <BrowserRouter>
      <div className="app">

        <Header />

        <Hero />

        <SelectGame />

        <section className="some-content">
          {/* Rest of app */}
        </section>

      </div>
    </BrowserRouter>
  );

}

export default App;

// Render App component
ReactDOM.render(<App />, document.getElementById('root'));
