import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

export default class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <input name="name" type="text" className="form-control" />
          <input name="email" type="text" className="form-control" />
          <input
            name="login"
            type="submit"
            className="btn btn-sm btn-success"
            value="Login"
          />
        </form>
      </div>
    );
  }
}
