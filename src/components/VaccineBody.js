import React, { Component } from 'react';
import QA from './QA';

class VaccineBody extends Component {
    state = {  }
    render() { 
        return( 
            <div className="Body col-11 col-lg-8">
                <QA/>
                <QA/>
                <QA/>
                <QA/>
            </div>
        );
    }
}
 
export default VaccineBody;