import React from 'react';
import "./ocean-dashboard-search-result.scss"
import DropCard from '../drop-card/drop-card';
import DropItemViewer from '../drop-item-viewer/drop-item-viewer';
import demoJson from '../../api/demo.json';
import Utils from '../../utils/utils';
import config from '../../config/ocean-dashboard-search-result_config.json';

const DEFAULT_SEARCH = "SSO MFA";

class OceanDashboardSearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {}
    };
  }
   componentWillMount() {
    let solutionNames;
    if (!Utils.isEmpty(config)) {
       this.setState({
        isLoaded: true,
        fields:config.grid.fields
      });
    }
    if(Utils.isEmpty(this.props.searchValue)){
      solutionNames = DEFAULT_SEARCH
    }else{
      solutionNames = this.props.searchValue;
    }
    this._searchResult(solutionNames);
    
  }
  
  componentWillReceiveProps(props){
    let searchValue = props.searchValue;
    if(!Utils.isEmpty(searchValue)){
      if(searchValue == "default"){
        searchValue = DEFAULT_SEARCH
      }
      searchValue = searchValue.toUpperCase();
      this._searchResult(searchValue);
    }
 }
 _searchResult(solutionNames){
   /* need to modify from config*/
   solutionNames = solutionNames.toUpperCase();
   let solName="SSO MFA IFA";
   let vendorName="OKTA";
   if(solName.includes(solutionNames)){
    this._searchResultByName(solutionNames,true);
   }else if(vendorName.includes(solutionNames)){
    this._searchResultByName(solutionNames,false);
   }

 }
  _searchResultByName(solutionNames,isSolutionName){
  const data  = demoJson;
  let solutions=[];
  let solItems={};
  if (data && !Utils.isEmpty(data.categories)) {
    let categories = data.categories;
    let items;
    categories.forEach((categorie) => {
      items = !Utils.isEmpty(categories) && Object.values(categorie)[0];
        (items || []).forEach((item) => {
          if (item && item.solutionName) {
            if (item.solutionName && (solutionNames.includes(item.solutionName) || !isSolutionName)) {
              if(!Array.isArray(solItems[item.solutionName])){
                solItems[item.solutionName]=[]
              }
              item["id"] = Utils.getUniqueId();
              if(!isSolutionName && solutionNames.includes(item.vendorName.toUpperCase())){
               solItems[item.solutionName].push(item)
              }else if(isSolutionName){
                solItems[item.solutionName].push(item)
              }
            }
          }
        })
    });
    for (const property in solItems) {
      if(!Utils.isEmpty(solItems[property])){
       solutions.push({title:property,value:solItems[property],id:Utils.getUniqueId()})
      }
    }
    this.setState({
      solutions: solutions
    });
  }
  
 }
  render() {
    return (
      <div className="ocean-dashboard-search-result">
        <div className="widget-panel">
        {Utils.isEmpty(this.state.solutions) ?
          <div className="message"> No results found for the given criteria</div>:
          this.state.solutions.map((item) => {
              return(<div className="widget" key={item.id} >
                <DropCard title={item.title} content={<DropItemViewer data={item.value} fields={this.state.fields}></DropItemViewer>}>
                </DropCard>
            </div> )
          })
        }
        </div>
      </div>
    );
  }
}

export default OceanDashboardSearchResult;
