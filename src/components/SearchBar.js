import React, { Component } from 'react';
import search from '../assets/images/search.png';

class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Search col-12 row">
                <div className="SearchBar col-lg-10 col-8">
                    <button>
                        <img src={search} alt="search"></img>
                    </button>
                    <input placeholder="Больница, Район"></input>
                </div>
                <div className="SearchBar col-lg-2 col-4">
                    <select>
                        <option value="0">I и II тип</option>
                        <option value="1">I тип</option>
                        <option value="2">II тип</option>
                    </select>
                </div>
            </div>
         );
    }
}
 
export default SearchBar;