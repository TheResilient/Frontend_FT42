import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import React, { useState } from "react";

function App() {
  var [selects, setSelects] = useState();
  console.log(selects);
  return (
    <div className="App">
      <div className="posts">
        <div className="head1">
          <h3>Asset Details</h3>
          {data.map((item, i) =>
            {return (
              <div key={i}>
                {item.name}
                <br></br>
                <b>{item.type}</b>
                <br></br>
                <b>Details: {item.details}</b>
                <br></br>
                Attributes:<br></br>
                <table>
                  <thead>
                    <th>
                      Key
                    </th>
                    <th>
                      Value
                    </th>
                  </thead>
                  {item.attributes.map((sub) => (
                    <tr>
                    <td>
                      <tr>
                      {sub.key}
                      </tr>
                    </td>
                    <td>
                      <tr>
                      {sub.value}
                      </tr>
                    </td>
                    </tr>
                    
                  ))}
                </table>
              </div>
            );
          })}
        </div>


        {/* <div>
          <select defaultValue={selects} value={selects} onChange={(e) => setSelects(e.target.value)}>
            
            {data.map((result) => (
              <option value={result.name}>{result.name}</option>
            ))}
          </select>
        </div>

        <br></br>
        <br></br>
        <table>
          <thead>
              <th>Key</th>
              <th>Value</th>
          </thead>
          {data
            .filter((data) => data.name == selects)
            .map((data) => {
              return (
                <tr>
                  <td>
                    {Object.keys(data).map((key, index) => {
                      return <tr key={index}>{key}</tr>; 
                    })}
                  </td>
                  <td>
                    {Object.values(data).map((value, index) => {
                      return <tr key={index}>{value}</tr>;
                    })}
                  </td>
                </tr>
              );
            })}
        </table> */}
      </div>
    </div>
  );
}


export default App;
