import React, { Component } from 'react';
import QA from '../components/QA';

class FAQBody extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Body col-11 col-lg-8">
                <span className="GeneralInfo col-12">Общая информация</span>
                <span className="InfoText col-12">Кому можно прививаться</span>
                <span className="InfoText col-12">СпутникВ</span>
                <span className="InfoText col-12">После вакцинации</span>
                <QA/>
                <QA/>
            </div>
         );
    }
}
 
export default FAQBody;