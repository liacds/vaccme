import React, { Component } from 'react';
import search from '../assets/images/search.png';

class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Search col-12 row">
                <div className="SearchBar col-12">
                    <button onClick={this.props.handleSubmit}>
                        <img src={search} alt="search"></img>
                    </button>
                    <input placeholder="Больница, Район" onChange={this.props.handleName} value={this.state.value} />
                </div>
                <div className="SearchBar">
                    <select className="col-lg-3 col-5" onChange={this.props.handleStock} value={this.state.value}>
                        <option value="true">Есть в наличии</option>
                        <option value="false">Нет</option>
                    </select>
                    <select className="col-lg-3 col-5" onChange={this.props.handleType} value={this.state.value}>
                        <option value="3">I и II тип</option>
                        <option value="1">I тип</option>
                        <option value="2">II тип</option>
                    </select>
                </div>
            </div>
         );
    }
}
 
export default SearchBar;