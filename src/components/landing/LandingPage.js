import React from "react";
import { Row, Col,  } from 'antd';
import Features from './Features';
import Searching from './Search';
import  Header from '../Header';
import Event from './Event';
import Footer from './Footer';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="landing-container">
          <Header />
          <Row>
            <Col md={22}  xs={24}>
              {/* importing the carousel componenet called Features */}
              <Features />
            </Col>
            <Col md={2} className="girl-image">
              <img src={require('../../assets/girl.png')} />
            </Col>
          </Row>
          {/* importing the Search component */}
          <Searching />
          </div>
          <Row className="bottom-landing-container">
            <Col md={8} xs={24}>
              {/* Using props to pass the data from the reusable componenet */}
              <Event
                image={(require('../../assets/car.jpg'))}
                title="Kijiji Motor Racing Club Mtwapa Circuit"
                month="APR"
                date="20"
              />
            </Col>
            <Col md={8} xs={24}>
              <Event
                image={(require('../../assets/dj.jpg'))}
                title="Introduction to Ultra Mixer Studio with Felix Mwangi"
                month="APR"
                date="21"
              />
            </Col>
            <Col md={8} xs={24}>
              <Event
                image={(require('../../assets/poster.jpg'))}
                title="Grow The Business Interviews Brend Nyango from Do It Now Inc"
                month="MAY"
                date="04"
              />
            </Col>
          </Row>
          <div className="second-row">
          <Row className="bottom-landing-container">
          <Col  md={8} xs={24}>
              <Event
                image={(require('../../assets/ux.jpg'))}
                title="Virtual UX meetup by Motiff (UX Nairobi lead)"
                month="MAY"
                date="20"
              />
            </Col>
            <Col  md={8} xs={24}>
              <Event
                image={(require('../../assets/beer.jpg'))}
                title="Yoga Evenings With Beer Cheese & Chocolate Flow"
                month="MAY"
                date="22"
              />
            </Col>
            <Col  md={8} xs={24}>
              <Event
                className="last-event-box"
                image={(require('../../assets/art.jpg'))}
                title="Daisy's VIRTUAL Fun Run - a 3K run benefiting Chain of Hope"
                month="MAY"
                date="30"
              />
            </Col>
          </Row>
          </div>
          {/* importing the footer component */}
          < Footer />
      </div>

    );
  }

}

export default LandingPage;
