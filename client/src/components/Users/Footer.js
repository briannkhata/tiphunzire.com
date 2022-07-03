import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer" class="footer">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Tiphunzire.com</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Powered by <a href="#">Infocus MW</a>
          </div>
        </footer>
      </div>
    );
  }
}
