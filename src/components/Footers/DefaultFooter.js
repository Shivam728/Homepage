/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                target="#"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Resources from{" "}
          <a
            href="#"
            target="_blank"
          >
            Creative Tim
          </a>
          . And Coded by{" "}
          <a
            href="#"
            target="_blank"
          >
            Me!
          </a>
          .
        </div>
      </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
