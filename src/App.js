import React from 'react';
import Routecomp from './Routecomp';
import {BrowserRouter} from 'react-router-dom'
import Linkcomp from './Linkcomp';
import './App.css'
function App() {
  return (
    <>
   <BrowserRouter>
   <Linkcomp/>
   <Routecomp/>
   </BrowserRouter>
   </>
  );
}

export default App;
