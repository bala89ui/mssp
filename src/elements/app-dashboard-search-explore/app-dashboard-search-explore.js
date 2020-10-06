import React from 'react';
import './app-dashboard-search-explore.scss';
import OceanDashboardSearchResult from '../ocean-dashboard-search-result/ocean-dashboard-search-result';
import DropSearch from '../drop-search/drop-search';
import Utils from '../../utils/utils';

class AppDashboardSearchExplore extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchValue:""
    }
   if(Utils.isValidPath(props,"location.state.text")){
    this.state={
      searchValue:props.location.state.text
    }
   }

  }
  
  render() {
    return ( 
      <div className="app-container app-dashboard-search-explore">
        <h2 className="title">Products Portfolio</h2>
        <div className="dashboard-search">
          <DropSearch placeholder="search solution eg: SSO, MFA etc" onSearch={this.onSearchEvent.bind(this)}></DropSearch>
        </div>
        <OceanDashboardSearchResult searchValue={this.state.searchValue}></OceanDashboardSearchResult>
    </div>
    );
  }
  onSearchEvent(e){
    if(e.keyCode == 13){
      this.setState({
          searchValue:Utils.isEmpty(e.target.value)?"default":e.target.value
      })
    }
  }
  
}

export default AppDashboardSearchExplore;
