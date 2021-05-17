import React, { Component } from 'react';
import PCard from './PCard';
import SearchBar from '../components/SearchBar';
import {ServerAddress} from '../constants/ServerAddress'

class HomeBody extends Component {
    constructor(props){
        super(props)
        this.state={
            medorganizations: [],
            searchedmedorganizations: [],
            isOpen: false,
            stock: true,
            type: 3,
            name: "",
            searched: false,
            size: 0,
            searchName: "",
        }
        this.handleStock = this.handleStock.bind(this)
        this.handleType = this.handleType.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    handleCancel = () => {
        this.setState({searched: false, isOpen: false})
    }
    handleName = (e) => {
        this.setState({name: e.target.value})
    }
    handleStock = (e) => {
        this.setState({stock: e.target.value})
    }
    handleType = (e) => {
        this.setState({type: e.target.value})
    }
    async handleSubmit(){
        this.handleCancel()
        let type = this.state.type
        let stock = this.state.stock
        console.log(type)
        console.log(stock)
        this.setState({searchName: this.state.name})
        if(stock && type == 1){
            console.log("HELPP")
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: "I тип", search_query: this.state.name, in_stock: "в наличии" })
            };
            console.log(requestOptions.body)
            const response = await fetch(`${ServerAddress}/medorganizations/search`, requestOptions);
            const data = await response.json();
            this.setState({ searchedmedorganizations: data, isOpen: false });
            console.log(this.state.medorganizations);
        }
        else if(stock && type == 2){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: "II тип", search_query: this.state.name, in_stock: "в наличии" })
            };
            console.log(requestOptions.body)
            const response = await fetch(`${ServerAddress}/medorganizations/search`, requestOptions);
            const data = await response.json();
            this.setState({ searchedmedorganizations: data, isOpen: false });
            console.log(this.state.medorganizations);
        }
        else if(stock && type == 3){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: "", search_query: this.state.name, in_stock: "в наличии" })
            };
            console.log(requestOptions.body)
            const response = await fetch(`${ServerAddress}/medorganizations/search`, requestOptions);
            const data = await response.json();
            this.setState({ searchedmedorganizations: data, isOpen: false });
            console.log(this.state.medorganizations);
        }
        else if(!stock && type == 1){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: "I тип", search_query: this.state.name, in_stock: "" })
            };
            console.log(requestOptions.body)
            const response = await fetch(`${ServerAddress}/medorganizations/search`, requestOptions);
            const data = await response.json();
            this.setState({ searchedmedorganizations: data, isOpen: false });
            console.log(this.state.medorganizations);
        }
        else if(!stock && type == 2){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: "II тип", search_query: this.state.name, in_stock: "" })
            };
            console.log(requestOptions.body)
            const response = await fetch(`${ServerAddress}/medorganizations/search`, requestOptions);
            const data = await response.json();
            this.setState({ searchedmedorganizations: data, isOpen: false });
            console.log(this.state.medorganizations);
        }
        else if(!stock && type == 3){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: "", search_query: this.state.name, in_stock: "" })
            };
            console.log(requestOptions.body)
            const response = await fetch(`${ServerAddress}/medorganizations/search`, requestOptions);
            const data = await response.json();
            this.setState({ searchedmedorganizations: data, isOpen: false });
            console.log(this.state.medorganizations);
        }
        this.setState({searched: true})
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
                <SearchBar handleType={this.handleType} handleStock={this.handleStock} handleSubmit={this.handleSubmit} handleName={this.handleName}/>
                {
                    !this.state.searched ?
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
                    <button className="More col-12 col-lg-5" onClick={()=>this.setState({isOpen: true})}>Еще</button>
                    </>
                    :<>
                    <button onClick={this.handleCancel} className="col-12 col-lg-5 More" style={{alignContent: 'center', justifyItems: 'center'}}>
                    <span style={{marginRight: '5px'}}>Параметры поиска: {this.state.searchName}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    </button>
                    {
                            this.state.searchedmedorganizations.map((medorganization, index)=>{
                            return (<PCard id = {medorganization.pk} key = {index}/>)
                        })
                    }
                    </>
                }
                
            </div>
         );
    }
}
 
export default HomeBody;