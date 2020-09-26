import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Customers from './components/Customers';
import FlightNumber from './components/Flight-Number';
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
       <div className="container-fluid appback">
       
          <Navbar/>
          <Switch>
            <Route path='/Customers' component={Customers} />
            <Route path='/FlightNumber' component={FlightNumber}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
