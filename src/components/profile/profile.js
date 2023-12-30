//import { useEffect, useState } from "react";
import "./Profile.scss";

export default function Profile({followersCount, followingCount, userLocation}){
    
    return(
        <>
        <div className="profile-container">
            <div className="profile-image" >
            <img src="github-logo1.png" alt="github logo" />
            </div>
            <div className="follow-div">
                <button>Followers | {followersCount}</button>
        
            </div>
            <div className="following-div">
                <button>Following | {followingCount}</button>
            </div>
            <div className="loc-div">
                <button>Location | {userLocation}</button>
            </div>
        </div>
        <div className="slogan">
            <h1>GitHub</h1>
            <p>How people build software.</p>
            </div>
        
            </>
    )
}

