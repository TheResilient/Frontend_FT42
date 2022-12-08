import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import React, { useState } from "react";

function PostList() {
  return (
    <div className="App">
        {data.map((detail, index)=>{
            return <h1>{detail.id}</h1>
        })}
    </div>
  );
}

export default PostList;
