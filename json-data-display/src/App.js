import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
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
                {/* <FormControl label={'margin="none"'} sx={{ width: "65ch" }}>
                  <OutlinedInput defaultValue={item.details} />
                </FormControl> */}
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
                {/* <Table
                  sx={{ maxWidth: "650px", borderRadius: "106px" }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Key</TableCell>
                      <TableCell>Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item.attributes.map((sub) => (
                      <TableRow>
                        <TableCell>{sub.key}</TableCell>
                        <TableCell>{sub.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table> */}

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
