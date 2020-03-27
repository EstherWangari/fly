import React from "react";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

function Footer() {
  return (
    <div  className="footer-container">
    <Row>
      <Col md={12} xs={24}>
      <img src={require('../../assets/logo.png')} />
      </Col>
      <Col md={12} xs={24}>
          <p>© 2020 Fly Events Inc</p>
      </Col>
    </Row>
    </div>
  );
}

export default Footer;
