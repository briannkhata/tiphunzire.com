import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer" class="footer">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>NiceAdmin</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </footer>
      </div>
    );
  }
}
