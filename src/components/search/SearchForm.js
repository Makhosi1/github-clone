import { useState } from "react";
import "./SearchForm.scss";
import { FaSearch } from "react-icons/fa";

export default function SearchForm(){
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [searchValue,setSearchValue] = useState("");
    
    return (
        <div className="input-wrapper">
            
        
            <FaSearch id="search-icon"/>
            <input
            type ="search"
            value = {searchValue}
            onChange = {e => setSearchValue(e.target.value)}
            placeholder="github"
            />
        
        </div>
    )
};