import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import phoneIcon from '../assets/images/phoneicon-blue.png'
import mailicon from '../assets/images/mailicon.png'
import telegram from '../assets/images/telegram.png'
import whatsapp from '../assets/images/whatsapp.png'
import {ServerAddress} from '../constants/ServerAddress'

class ContactUsPage extends Component {
    constructor(props){
        super(props)
        this.state = { 
            name: "",
            email: "",
            message: "",
            recieved: "",
            sending: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async handleSubmit(){
        this.setState({sending: true})
        console.log(this.state.name)
        console.log(this.state.email)
        console.log(this.state.message)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: this.state.name, email: this.state.email, message_content: this.state.message })
        };
        const response = await fetch(`${ServerAddress}/contact_us`, requestOptions);
        const data = await response.json();
        this.setState({ recieved: data, sending: false });
        console.log(this.state.recieved);
    }
    render() { 
        return ( 
            <div className="App container col-12">
                <Header isContactUs={true}/>
                <div className="Body col-11 col-lg-8 row" style={{flexDirection: "row", alignItems: 'flex-start'}}>
                    <div className="col-12 col-lg-7" style={{marginBottom: '50px'}}>
                        <input className="AboutName col-12" placeholder="Имя" onChange={(e)=>this.setState({name: e.target.value})}/>
                        <input type="email" className="AboutName col-12" placeholder="Email" onChange={(e)=>this.setState({email: e.target.value})}/>
                        <textarea className="AboutDesc col-12" placeholder="Вы молодцы..." onChange={(e)=>this.setState({message: e.target.value})}/>
                        <button className="AboutSend col-12" onClick={this.handleSubmit}>Отправить сообщение</button>
                        {
                            this.state.sending ?
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                                <span style={{color: '#2E3A59', marginLeft: '5px'}}>Отправка сообщения</span>
                            </div> :
                            this.state.recieved === 'Message successful' ?
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                </svg>
                                <span style={{color: 'green', marginLeft: '5px'}}>Сообщение успешно отправлено!</span>
                            </div>:
                            this.state.recieved === 'error : "Some smtp error"' ?
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                <span style={{color: 'red', marginLeft: '5px'}}>Не удалось доставить сообщение</span>
                            </div>
                            :
                            this.state.recieved === "Param missing" ?
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                                <span style={{color: 'red', marginLeft: '5px'}}>Необходимо заполнить все поля</span>
                            </div>:
                            <></>
                        }
                    </div>
                    <div className="col-12 col-lg-5" style={{marginBottom: '30px'}}>
                        <div className="col-lg-10 col-12" style={{marginLeft: 'auto', marginRight: 'auto',}}>
                            <span className="OurTeam col-12">Контактная информация</span>
                            <div style={{marginTop: "12px"}}>
                                <img src={mailicon} alt="mailicon" style={{height: "16px", width: "20px"}}/>
                                <a href="mailto:vaccine.me.kz@gmail.com" style={{fontSize: '16px', fontFamily:'sans-serif', color: '#2E3A59', marginLeft: '10px', textDecoration: "underline"}}>vaccine.me.kz@gmail.com</a>
                            </div>
                            <div style={{marginTop: "5px"}}>
                                <img src={phoneIcon} alt="phoneIcon" style={{height: "18px", width: "18px"}}/>
                                <a href="tel:+77072802306" style={{fontSize: '16px', fontFamily:'sans-serif', color: '#2E3A59', marginLeft: '10px', textDecoration: "underline"}}>87072802306</a>
                            </div>
                            <div style={{marginTop: "25px"}}>
                                <a href="https://api.whatsapp.com/send?phone=77072802306&text=Здравствуйте!">
                                    <img src={whatsapp} alt="whatsapp" style={{height: "32px", width: "32px"}}/>
                                </a>
                                <a href="https://telegram.me/bereeennn" style={{marginLeft: "30px"}}>
                                    <img src={telegram} alt="telegram" style={{height: "28px", width: "28px"}}/>
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