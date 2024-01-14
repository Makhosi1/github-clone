import { useEffect, useState } from "react";
import "./Profile.scss";

export default function Profile({ searchValue }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const profileStats = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${searchValue}`);
                const data = await response.json();
                console.log(data);
                setData(data);
            } catch (error) {
                console.error('Error fetching user statics:', error)
            }
        };
        profileStats();
    }, [searchValue]
    );

    return (
        <>
            <div className="profile-container">
                <div className="profile-image" >
                    <img src= {data.avatar_url} alt="github profile picture" />
                </div>
                <div className="follow-div">
                    <button>Followers | {data.followers}</button>

                </div>
                <div className="following-div">
                    <button>Following | {data.following}</button>
                </div>
                <div className="loc-div">
                    <button>Location | {data.location ? `${data.location}` : "No Location"} </button>
                </div>
            </div>
            <div className="slogan">
                <h3>{data.name}</h3>
                <p>{data.login}</p>
            </div>

        </>
    )
}

