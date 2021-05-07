import React, { Component } from 'react';
// import pht from '../assets/images/clinic-photo.png'
import infoIcon from '../assets/images/infoicon.png'
import moveIcon from '../assets/images/moveicon.png'
import WebButton from '../components/WebButton'
import {ServerAddress} from '../constants/ServerAddress'
export default class MedBody extends Component {
    constructor(props){
        super(props)
        this.state = { 
            medorganization: {},
            loaded: false,
        }
    }
    componentDidMount(){
        fetch(`${ServerAddress}/medorganizations/${this.props.pk}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    medorganization: response,
                })
                console.log(response)
        })
    }
    render() {
        return (
            <div className="Body col-11 col-lg-8">
                <div className="row col-12" style={{justifyContent: "space-between", marginBottom: 50}}>
                    <img src={`${ServerAddress}${this.state.medorganization.photo}`} 
                    alt='pht' 
                    className='col-12 col-lg-6' 
                    style={this.state.loaded ? {padding: 0} : {display: 'none'}}
                    onLoad={()=>{
                        this.setState({loaded: true})
                        console.log("loaded")
                    }}/>
                    <div className="col-12 col-lg-5" style={{padding: 0}}>
                        <span className="Info col-12">Информация</span>
                        <div className="InfoRow">
                            <span>Тип вакцины</span>
                            {(this.state.medorganization.has_type_1 && this.state.medorganization.has_type_2) ?
                                <span>I и II тип</span>
                                                :
                                this.state.medorganization.has_type_1?
                                <span>I тип</span>
                                                :
                                this.state.medorganization.has_type_2?
                                <span>II тип</span>
                                                :
                                <span>Нет вакцин</span>
                            }
                        </div>
                        <div className="InfoRow">
                            <span>Нужна ли прописка</span>
                            <span>да</span>
                        </div>
                        <div className="InfoRow">
                            <span>Документы личности</span>
                            <span>Удостоверение</span>
                        </div>
                        <div className="RulesB col-12" style={{justifyContent:"flex-start"}}>
                            <img src={infoIcon} alt='infoIcon'></img>
                            <span className="Rules">Правила вакцинирования</span>
                        </div>
                        <div className="HelperButtons col-12 row">
                            <button className="Move-Button col-12 col-lg-5">
                                    <img src={moveIcon} alt='moveIcon'></img>
                                    <span className="col-7">Проехать</span>
                                </button>
                            <WebButton medBody = {true} medorganization = {this.state.medorganization}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}