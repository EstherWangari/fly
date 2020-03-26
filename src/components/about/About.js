import React from 'react';
import {Row, Col} from 'antd';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../landing/Footer'

class About extends React.Component {
    render(){
        return(
            <div className="about-container">
                <div className="head-about">
                    <Header />
                </div>
                <div className="about-content">
                    <h3>About Us</h3>
                    <p>Fly Events Inc is a high end events company based in Nairobi. We help organizers and friends are not food sleep all day whilst slave
                        is at work, play all night whilst slave is sleeping throw down all the stuff in the kitchen and making bread on the bathrobe fish i must
                        find my red catnip fishy fish.
                    </p>
                    <p>Always hungry inspect anything brought into the house. Furrier and even more furrier hairball carefully drink from water glass and
                        then spill it everywhere and proceed to lick the puddle so fart in owners food , or chirp at birds and meow meow, for poop in a
                        handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls.
                    </p>
                    <Row>
                    <Col md={12}>
                        <h3>Get in touch</h3>
                        <ul>
                            <li> <i class="fa fa-envelope" aria-hidden="true"></i>hello@fly.inc</li>
                             <li> <i class="fa fa-phone" aria-hidden="true"></i>+254 011 100 011</li>
                            <li> <i class="fa fa-twitter" aria-hidden="true"></i>@flyinc</li>
                        </ul>
                    </Col>
                    <Col md={12}>
                        <div className="about-image">
                            <img src={require('../../assets/balloon.png')} />
                        </div>
                    </Col>
                </Row>
                </div>
                <Footer />
            </div>
        );
    }
}
export default About;