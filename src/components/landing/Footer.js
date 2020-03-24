import React from "react";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

function Footer() {
  return (
    <div id="events" className="footer-container">
    <Row>
      <Col span={12}>
      <img src={require('../../assets/logo.png')} />
      </Col>
      <Col span={12}>
          <p>© 2020 Fly Events Inc</p>
      </Col>
    </Row>
    </div>
  );
}

export default Footer;
