import React from "react";
import "./index.css";
import "./test.scss";
import $1 from "jquery1";
console.log("jquery:", $1);
console.log("webpack");
import("./log").then((log) => {
  log(666);
});

React.createElement("div");

export default function log_a(msg) {
  console.log(msg);
}

// fetch("http://localhost:9001/api/test1");
// fetch("http://localhost:9001/api/test2");
