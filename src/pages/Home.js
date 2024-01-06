//import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Profile from "../components/profile/Profile";
import RepositoryCard from "../components/repositories/RepositoryCard";


export default function Home() {
   
    const searchValue = "Makhosi1";
    const repoName = 'repos';
    return (
        <>
        <Header /> 
        <Profile searchValue={searchValue}/>
        <RepositoryCard 
        searchValue ={searchValue}
        repoName ={repoName}
        />
            
        </>
    )
}

  
 