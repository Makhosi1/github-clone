import { useEffect, useState } from "react";
import SearchForm from "../search/SearchForm";
import "./Header.scss";

export default function Header (){
    const [searchValue,setSearchValue] = useState("");

      
    const userId = searchValue;

    const user = async () => {
        const results = await fetch(`https://api.github.com/users/${userId}`)
        .then((response) => response.json()); 

         if (!results.error){
            console.log (`User not found`)
         }
    };

    useEffect (() => {
        user();
    }
    )
    

    return(
        <div>
            <header>
            <SearchForm
            searchValue ={searchValue}
            setSearchValue={setSearchValue}
            />
            <div className="headertag">
            <img src="github-logo1.png" alt="github logo" />
            <div className="tagDescription">
            <h4>GitHub</h4>
            <p>How people build software</p>
            </div>
            </div>
            </header>
        </div>
    )
}