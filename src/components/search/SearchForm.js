import { useEffect, useState } from "react";
import "./SearchForm.scss";
import { FaSearch } from "react-icons/fa";

export default function SearchForm(){
   
    const [searchValue,setSearchValue] = useState("Makhosi1");

    
    

    const handleChange = (searchValue) => {
        setSearchValue(searchValue);
        
    }
    
    const handleSearch = (e) => {
        e.preventDefault();
        const results = fetch(`https://api.github.com/users/${searchValue}`)
        .then(data => data.json);
        console.log(results);
    } 

    return (
        <div className="input-wrapper">
           <form onSubmit={handleSearch}>
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