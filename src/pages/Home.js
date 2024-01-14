//import { useEffect, useState } from "react";
import { useState } from "react";
import Header from "../components/header/Header";
import Profile from "../components/profile/Profile";
import RepositoryCard from "../components/repositories/RepositoryCard";
import { Link } from "react-router-dom";
import "./../components/scss/pages.scss"



export default function Home() {
   
    const [searchValue, setSearchValue] = useState("Makhosi1");
    const repoName = 'repos';
    return (
        <>
        <Header setSearchValue = {setSearchValue}/> 
        <Profile searchValue={searchValue}/>
        <RepositoryCard 
        searchValue ={searchValue}
        repoName ={repoName}
        />
          <Link 
          className="links"
          to="/all-repositories">View all repositories</Link>  
        </>
    )
}

  
 