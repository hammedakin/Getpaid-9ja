import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Dashboard from './Pages/Dashboard'


function App() {
  return (

        <>

    <BrowserRouter>

    <Navbar/>

      <Switch>
      <Route exact path="/" component={HomePage}/>
        
      <Route exact path="/login" component={Login}/>

      <Route exact path="/signup" component={SignUp}/>

      <Route exact path="/dashboard" component={Dashboard}/>

      </Switch>

     
    </BrowserRouter>
    </>
    
  );
}

export default App;
