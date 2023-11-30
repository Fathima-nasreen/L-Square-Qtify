import React from "react";
//import Button from "../Button/Button";
import { ReactComponent as Searchicon } from "../../assects/Search icon.svg";
import "./Search.css"

function Search({ placeHolder }) {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className= "wrapper" onSubmit={onSubmit}>
            
            <input className= "search" placeHolder={placeHolder}/>
                    
            <button  className= "searchButton" type="submit">
                <Searchicon />
            </button>
            
        </form>
    )
}

export default Search;