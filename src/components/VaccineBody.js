import React, { Component } from 'react';
import QA from './QA';

class VaccineBody extends Component {
    state = {  }
    render() { 
        return( 
            <div className="Body col-11 col-lg-8">
                <QA q={2}/>
                <QA q={3}/>
                <QA q={4}/>
                <QA q={5}/>
            </div>
        );
    }
}
 
export default VaccineBody;