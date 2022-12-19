import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import React from "react";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div className="posts">
        <div className="head1">
          <h3>Asset Details</h3>
          {data.map((item, i) => {
            return (
              <div key={i}>
                {item.name}
                <pre />
                {item.type}
                <pre />
                
                <Box
                  sx={{
                    width: 300,
                    border: "1px solid",
                    borderRadius: "10px",
                    padding: "2px",
                  }}
                >
                  {item.details}
                </Box>
                <pre />
                <h4>Attributes</h4>
                <pre />
                
                <table>
                  <tr>
                    <th class="ars">Key</th>
                    <th class="ars">Value</th>
                  </tr>

                  {item.attributes.map((sub) => (
                    <tr>
                      <td class="ars">{sub.key}</td>
                      <td class="ars">{sub.value}</td>
                    </tr>
                  ))}
                </table>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
