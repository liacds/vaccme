import React, { Component } from 'react';
import QA from './QA';

class MiniFAQ extends Component {
    render() { 
        return ( 
            <div className="MiniFAQ col-12">
                <span className="FAQBigText">FAQ</span>
                <QA/>
                <QA/>
            </div>
         );
    }
}
 
export default MiniFAQ;