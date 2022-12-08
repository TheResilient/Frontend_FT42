import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import PostList from "./list";
import React, { useState } from "react";

function App() {
  var [selects, setSelects] = useState();
  console.log(selects);
  return (
    <div className="App">
      <div className="posts">
        <div className="head1">
          <h3>Asset Details</h3>
          Key<br></br>
          Text
          <br />
          <input type="text" id="fname" name="fname"></input>
          <br></br>
          <br></br>
          Attributes<br></br>
          <br></br>
        </div>
        <div>
          <select value={selects} onChange={(e) => setSelects(e.target.value)}>
            <option selected disabled="true">
              --select--
            </option>
            {data.map((result) => (
              <option value={result.id}>{result.id}</option>
              ))}
          </select>
        </div>
              
        <br></br>
        <br></br>
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
            {data
              .filter((data) => data.id == selects)
              .map((data) => {
                return (
                  <tr>
                    <td>
                      {Object.keys(data).map((key, index) => {
                        return <div key={index}>{key}</div>;
                      })}
                    </td>
                    <td>
                      {Object.values(data).map((value, index) => {
                        return <div key={index}>{value}</div>;
                      })}
                    </td>
                  </tr>
                );
              })}
          </thead>
        </table>
      </div>
    </div>
  );
}

function show(d) {
  alert(d);
}

export default App;
