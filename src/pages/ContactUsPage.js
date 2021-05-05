import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import phoneIcon from '../assets/images/phoneicon-blue.png'
import mailicon from '../assets/images/mailicon.png'
import telegram from '../assets/images/telegram.png'
import whatsapp from '../assets/images/whatsapp.png'

class ContactUsPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App container col-12">
                <Header isContactUs={true}/>
                <div className="Body col-11 col-lg-8 row" style={{flexDirection: "row", alignItems: 'flex-start'}}>
                    <div className="col-12 col-lg-7">
                        <input className="AboutName col-12" placeholder="Имя"/>
                        <input type="email" className="AboutName col-12" placeholder="Email"/>
                        <textarea className="AboutDesc col-12" placeholder="Вы молодцы..."/>
                        <button className="AboutSend col-12">Отправить сообщение</button>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="col-lg-8 col-12" style={{marginLeft: 'auto', marginRight: 'auto',}}>
                            <span className="OurTeam col-12">Контактная информация</span>
                            <div>
                                <img src={mailicon} alt="mailicon"/>
                                <a href="mailto:vaccine.me.kz@gmail.com" style={{fontSize: '16px', fontFamily:'sans-serif', color: '#2E3A59', marginLeft: '10px'}}>vaccine.me.kz@gmail.com</a>
                            </div>
                            <div>
                                <img src={phoneIcon} alt="phoneIcon"/>
                                <a href="tel:+77072802306" style={{fontSize: '16px', fontFamily:'sans-serif', color: '#2E3A59', marginLeft: '10px'}}>87072802306</a>
                            </div>
                            <div>
                                <a href="https://google.com">
                                    <img src={whatsapp} alt="whatsapp"/>
                                </a>
                                <a href="https://google.com">
                                    <img src={telegram} alt="telegram"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>    
        );
    }
}
 
export default ContactUsPage;