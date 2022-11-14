import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <div className="footermain">
      <Container fluid style={{ backgroundColor: "#000048" }}>
        <Row className="footer">
          <Col lg={1}></Col>
          <Col lg={5} className="footerleft">
            <div className="float-left text-white">
              <p>
                ©2019 Globoforce Limited trading as Workhuman. All rights
                reserved.
              </p>{" "}
            </div>
          </Col>
          <Col lg={5} className="footerright d-lg-block d-none">
            <div className="float-right">
              <p>
                {" "}
                <a
                  href="http://res1.globoforce.com/corporate/eng/terms.html"
                  className="leftMargin"
                  target="_blank"
                >
                  Terms of Use
                </a>{" "}
                <a
                  href="http://res1.globoforce.com/corporate/eng/privacy.html"
                  className="leftMargin"
                  target="_blank"
                >
                  Privacy Policy
                </a>{" "}
                <a
                  href="http://res1.globoforce.com/corporate/eng/cookie.html"
                  className="leftMargin"
                  target="_blank"
                >
                  Cookie Policy
                </a>{" "}
                <a href="/microsites/t_pub/Contacts" className="leftMargin">
                  Contact Us
                </a>{" "}
              </p>
            </div>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
