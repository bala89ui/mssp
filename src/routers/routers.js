import React from 'react';
import AppDashboardSearchExplore from '../elements/app-dashboard-search-explore/app-dashboard-search-explore';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import OceanHeader from '../elements/ocean-header/ocean-header';

const Routers =()=>{
    return ( 
      <Router>
          <Route exact path="/" component={AppDashboardSearchExplore}/>
    </Router>)
}

export default Routers;
