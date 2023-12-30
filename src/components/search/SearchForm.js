//import { useEffect, useState } from "react";
import "./SearchForm.scss";
import { FaSearch } from "react-icons/fa";

export default function SearchForm({searchValue, setSearchValue}){
   


    const handleChange = (searchValue) => {
        setSearchValue(searchValue);
        
    }

    return (
        <div className="input-wrapper">
           <form>
            <FaSearch id="search-icon"/>
            <input
            type ="search"
            value = {searchValue}
            onChange = {e => handleChange(e.target.value)}
            placeholder="github"
            />
            </form>
        </div>
    )
};

