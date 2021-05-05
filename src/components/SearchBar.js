import React, { Component } from 'react';
import search from '../assets/images/search.png';

class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Search col-12">
                <div className="SearchBar col-12">
                    <button>
                        <img src={search} alt="search"></img>
                    </button>
                    <input placeholder="Больниц, Район"></input>
                </div>
                <div className="SearchBar col-12">
                    <input className="DatePicker" type="date" placeholder="По дате"></input>
                    <select>
                        <option value="0">I и II тип</option>
                    </select>
                </div>
            </div>
         );
    }
}
 
export default SearchBar;