import React, { Component } from 'react';
import PCard from './PCard';
import SearchBar from '../components/SearchBar';
import MiniFAQ from '../components/MiniFAQ';
import {ServerAddress} from '../constants/ServerAddress'

class HomeBody extends Component {
    constructor(props){
        super(props)
        this.state={
            medorganizations: [],
            isOpen: false,
        }
    }
    componentDidMount(){
        fetch(`${ServerAddress}/medorganizations`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    medorganizations: response
                })
                console.log(this.state.medorganizations)
            })
    }
    render() { 
        return ( 
            <div className="Body col-11 col-lg-8">
                <SearchBar/>
                {
                    this.state.isOpen ?
                        this.state.medorganizations.map((medorganization, index)=>{
                            return (<PCard id = {medorganization.pk} key = {index}/>)
                    })
                    :<>{
                        this.state.medorganizations.map((medorganization, index)=>{
                            if(index < 2){
                                return(<PCard id = {medorganization.pk} key = {index}/>)
                            }
                            else{
                                return (<></>)
                            }
                        })
                    }
                    <button className="More col-11" onClick={()=>this.setState({isOpen: true})}>Еще</button>
                    </>
                }
                <MiniFAQ/>
            </div>
         );
    }
}
 
export default HomeBody;