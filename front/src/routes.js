import React from 'react'
import {
     BrowserRouter as Router, 
     Switch,
     Route 
    } from 'react-router-dom';

import Cadastro from './pages/Cadastro';  
import Login from './pages/Login';  



function Routes () {
    return(
        <Router>
            <Switch>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/" exact component= {Login}/>
            </Switch>
        </Router>
    )
}


export default Routes;
