import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from 'antd';
import Features from './Features'


class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <Row>
          <Col span={22}>
          <Features />
          </Col>
          <Col span={2} className="girl-image">
            <img src={require('../../assets/girl.png')} />
          </Col>
        </Row>
      </div>
    );
  }

}

export default LandingPage;
