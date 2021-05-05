import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class ContactUsPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App container col-12">
                <Header isContactUs={true}/>
                <div className="Body col-11 col-lg-8">
                        <input className="AboutName col-12" placeholder="Имя"/>
                        <input type="email" className="AboutName col-12" placeholder="Email"/>
                        <textarea className="AboutDesc col-12" placeholder="Вы молодцы..."/>
                        <button className="AboutSend col-12">Отправить сообщение</button>
                        <span className="OurTeam col-12">Контактная информация</span>
                </div>
                <Footer/>
            </div>    
        );
    }
}
 
export default ContactUsPage;