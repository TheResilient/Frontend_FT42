import logo from './logo.svg';
import './App.css';
import React from 'react';
import data from "./data.json";


function App() {
  return (
    <div className="App">
      <div className="posts">
        <div className="head1">
        <h3>Asset Details</h3>
        Key<br></br>
        Text<br/>
        <input type="text" id="fname" name="fname"></input><br></br><br></br>
        Attributes<br></br><br></br>
        </div>
        <table>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
          {/* {console.log(Object.keys(data)[0])} */}
          { data.filter((data)=> data.id===3).map(data => {
          return(
            <tr>
              <td>
            {Object.keys(data).map((key, index)=>{
              return (
                <div key={index}>
                    {key}
                </div>
              );
            })}
            </td>
            <td>
            {Object.values(data).map((value, index)=>{
                return (
                  <div key={index}>
                      {value}
                  </div>
                );
              })}
              </td>
            </tr>
          )
          })}</table>
      </div>
    </div>
  );
}

export default App;
