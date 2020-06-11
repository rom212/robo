import React from 'react';


const SearchBox = (props) => {

    return(
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
            type="search"
            placeholder="search Robot" 
            onChange = {props.searchHandler}/>
        </div>
        
    )
}

export default SearchBox;