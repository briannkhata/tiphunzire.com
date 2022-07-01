import React, { Component } from "react";

export default class StudentList extends Component {
  componentDidMount() {
    const apiUrl = "http://localhost:5000/api/v1/user/students/";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));
  }

  render() {
    return (
      <div>
        <h1>my Component has Mounted, Check the browser 'console' </h1>
      </div>
    );
  }
}
