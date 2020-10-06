import React from 'react';
import AppDashboardSearchExplore from '../elements/app-dashboard-search-explore/app-dashboard-search-explore';
import {BrowserRouter as Router,Route} from "react-router-dom";
import AppProductDetails from '../elements/app-product-detail/app-product-detail';

const Routers =()=>{
    return ( 
      <Router>
          <Route exact path="/" component={AppDashboardSearchExplore}/>
          <Route exact path="/ocean-product-detail" component={AppProductDetails}/>
    </Router>)
}

export default Routers;
