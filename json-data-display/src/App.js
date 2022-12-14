import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
// import { makeStyles } from "tss-react/mui";

// const useTableHeaderStyles = makeStyles({
//   // .MuiTableHead-root
//   root: {
//     borderRadius: "10px",
//   },
// });

function App() {
  // var [selects, setSelects] = useState();
  // console.log(selects);
  // const tableHeaderClasses = useTableHeaderStyles();
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
                <FormControl label={'margin="none"'} sx={{ width: "65ch" }}>
                  <OutlinedInput defaultValue={item.details} />
                </FormControl>
                <pre />
                <b>Attributes</b>
                <pre />
                <Table
                  sx={{ maxWidth: "650px", borderRadius: "106px" }}
                  aria-label="simple table"
                >
                  <TableHead>
                    {/* <TableHead classes={tableHeaderClasses.root}> */}
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
                </Table>
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
