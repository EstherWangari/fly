import React from 'react';
import { Link } from 'react-router-dom';

class Event extends React.Component {
    navigate(){
      console.log('nay');
      window.location.href = '/admin';
    }  
    render(){
        return(
            <div  className="bottom-landing">
              <div className='event-box' onclick="alert('as')">
                <div className="event-image">
                  <img src={this.props.image} />
                </div>
                <div className="orange">
                  <div className="orange-box">
                      <div style={{ fontSize: '20px', lineHeight: 1.05 }}>{this.props.date}</div>
                      <div>{this.props.month}</div>
                  </div>
                  <div className="event-content">
                      <p><Link to={"/each-event"}>{this.props.title}</Link></p>
                  </div>
                </div>
              </div>
           </div>
      
        );
    }
}
export default Event;