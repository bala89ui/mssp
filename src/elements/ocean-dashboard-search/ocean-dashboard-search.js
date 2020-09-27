import React from 'react';
import './ocean-dashboard-search.scss';
import DropSearch from '../drop-search/drop-search';

class OceanDashboardSearch extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="ocean-dashboard-search">

        <DropSearch placeholder="search solution eg: SSO, MFA etc" onSearch={this.props.onSearch}></DropSearch>

      </div>
    );
  }
  

}

export default OceanDashboardSearch;
