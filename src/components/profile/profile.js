import { useEffect, useState } from "react";
import "./Profile.scss";

export default function Profile({searchValue}){
     
    const [data, setData] = useState([]);

    useEffect(() => {
        const followStats = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/makhosi1`);
                const data = await response.json();
                console.log(data);
               setData(data);
            } catch (error){
                console.error('Error fetching user statics:', error)
            }
        };
       followStats();
    }, [searchValue]

    );
    
    return(
        <>
        <div className="profile-container">
            <div className="profile-image" >
            <img src="github-logo1.png" alt="github logo" />
            </div>
            <div className="follow-div">
                <button>Followers | {data.followers}</button>
        
            </div>
            <div className="following-div">
                <button>Following | {data.following}</button>
            </div>
            <div className="loc-div">
                <button>Location | </button>
            </div>
        </div>
        <div className="slogan">
            <h1>GitHub</h1>
            <p>How people build software.</p>
            </div>
        
            </>
    )
}

