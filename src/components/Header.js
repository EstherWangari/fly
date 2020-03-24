import React from "react";
import "./App.css";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

function Header() {
  return (
    <div className="header-container">
    <Row>
      <Col md={18} sm={24}>
      <img src={require('../assets/logo.png')} />
      </Col>
      <div className="left-nav">
      <Col md={2} sm={24}>EVENTS</Col>
      <Col md={2} sm={24}>ABOUT</Col>
      <Col md={2} sm={24}>LOGIN</Col>
      </div>
    </Row>
    </div>
  );
}

export default Header;
