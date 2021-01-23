import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import dotenv from 'dotenv';

import MicroFrontend from './MicroFrontend';
import Navbar from './components/Navbar';

import './App.css';

dotenv.config();

const defaultHistory = createBrowserHistory();

const {
  REACT_APP_MFE_A: mfeAHost,
  REACT_APP_MFE_B: mfeBHost,
  REACT_APP_MFE_C: mfeCHost,
} = process.env;

console.log(`***** env::${JSON.stringify(process.env)}`);
console.log(`***** mfeAHost::${mfeAHost}`);
console.log(`***** mfeBHost::${mfeBHost}`);
console.log(`***** mfeCHost::${mfeCHost}`);

const mfeA = ({ history = defaultHistory }) => {
  return <MicroFrontend history={ history } host={ mfeAHost } name="MFEa" />
};

const mfeB = ({ history = defaultHistory }) => {
  return <MicroFrontend history={ history } host={ mfeBHost } name="MFEb" />
};

const mfeC = ({ history = defaultHistory }) => {
  return <MicroFrontend history={ history } host={ mfeCHost } name="MFEc" />
};

const HOME = () => {
  return (
    <h1 className="app-head">MFE Home</h1>
  )
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={ HOME } />
          <Route exact path="/mfe-a" component={ mfeA } />
          <Route exact path="/mfe-b" component={ mfeB } />
          <Route exact path="/mfe-c" component={ mfeC } />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
