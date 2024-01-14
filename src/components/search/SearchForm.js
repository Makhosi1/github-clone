import { useEffect, useState } from "react";
import "./SearchForm.scss";
import { FaSearch } from "react-icons/fa";

export default function SearchForm({submitSearch}){
   
    const [searchValue,setSearchValue] = useState("");


    const handleChange = (searchValue) => {
        setSearchValue(searchValue);
        
    }
    
    const handleSearch = async (e) => {
        e.preventDefault();
        submitSearch(searchValue);
        /*const response = await fetch(`https://api.github.com/users/${searchValue}`);
        const data = await response.json();
        console.log(data);
        */
    } 

    return (
        <div className="input-wrapper">
           <form onSubmit={handleSearch}>
            <FaSearch id="search-icon"/>
            <input
            type = "search"
            value = {searchValue}
            onChange = {e => handleChange(e.target.value)}
            placeholder="username"
            />
            </form>
        </div>
    )
};


/*
 const [searchValue,setSearchValue] = useState("");

    

    const user = async () => {
        const results = await fetch(`https://api.github.com/users/makhosi1`)
        .then((response) => response.json()); 

         if (!results.error){
            console.log (`User not found`)
         }
    };

    useEffect (() => {
        user();
    }
    )

    */