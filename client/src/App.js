import React from 'react';

import Header from './Header';
import Hero from './Hero';
import SelectGame from './SelectGame'; 

function App() {

  return (
    <div className="app">

      <Header />

      <Hero />

      <SelectGame />

      <section className="some-content">
       // rest of component
      </section>

    </div>
  );
}

export default App;
