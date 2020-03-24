import React from 'react';
import { Input } from 'antd';
import { Link } from 'react-router-dom';

const { Search } = Input;

class Searching extends React.Component {
    render(){
        return(
            <div className="search-box">
            <Search
                placeholder="FIND AND EVENT.."
                placeholderStyle={{color:'red'}}
                style={{ width: 500, height:45,borderRadius:6, color:'red'}}
            />
            <div className="browse">
                <a href="#events">
                    <p>BROWSE All EVENTS{' '} <i class="fa fa-angle-down" aria-hidden="true"></i></p>
                </a>
            </div>
            </div>
        );
    }
}
export default Searching;