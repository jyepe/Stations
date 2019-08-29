import React, { Component } from 'react';
import * as XLSX from 'xlsx';
import 'whatwg-fetch';

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       stations: []
    }
  }

  componentDidMount() {
    this.SetStations();
  }
  
  SetStations() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", 'ListOfStations.xlxs', false);
    rawFile.onreadystatechange = function ()
    {
      console.log("here1");
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                
                alert(allText);
            }
        }
    }
    rawFile.send();

    // var name = f.name;
    // const reader = new FileReader();
    // reader.onload = (evt) => {
    // /* Parse data */
    // const bstr = evt.target.result;
    // const wb = XLSX.read(bstr, {type:'binary'});
    // /* Get first worksheet */
    // const wsname = wb.SheetNames[0];
    // const ws = wb.Sheets[wsname];
    // /* Convert array of arrays */
    // const data = XLSX.utils.sheet_to_csv(ws, {header:1});
    // /* Update state */
    // console.log("Data>>>"+data);
//};
//reader.readAsBinaryString(f);
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
