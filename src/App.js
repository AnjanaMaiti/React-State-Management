import React from 'react';
import './App.css';
import Movielist from './app1'
import {SeriesProvider} from './app3_Context'
import AddSeries from './app4_AddSeries';


function App() {
  return (
    <SeriesProvider>
      <div className="App">
          <AddSeries/>
          <Movielist/>
      </div>
    </SeriesProvider>
  );
}

export default App;
