import React from "react";
import Header from '../Header';
import {Row, Col, Button,} from 'antd';
import { Input } from 'antd';
import moment from 'moment';
import Footer from "./Footer";
import SingleEvent from './SingleEvent'
import { Link } from 'react-router-dom';


const { TextArea } = Input;


function EventPage() {
  return(
    <div className="each-event">
      <div className="head-about">
          <Header />
      </div>
      <div className="slider-cont">
        <Link>
        <SingleEvent
         image={(require('../../assets/fashion.jpg'))}
         heading="Nairobi Fashion Week 20th Edition"
         content="Join Nairobi Fashion Club on a crash-course through the history of
                  fashion in Nairobi, from the revolutionary impact of its ready-to-wear
                  garment industry in the 1990s, to its current role as a global fashion
                  capital."
          date={20}
          month="Apr"
          location="Prestige Cinemas Ngong Road"
          time="9am - 6pm"
          organizer="Fab Wear Intl"
          author="Wangari Gikonyo"
          comment="We supply a series of design principles, practical patterns and high quality designresources (Sketch and Axure)."
        />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default EventPage;
