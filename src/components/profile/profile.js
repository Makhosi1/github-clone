import { useSelector } from "react-redux";
import "./Profile.scss";

export default function Profile() {
    const userData = useSelector( state => state.userData);
    
    return (
        <>
            <div className="profile-container">
                <div className="profile" >
                    <div className="image">
                    <img src= {userData.avatar_url ? `${userData.avatar_url}` : "github-logo1.png"} alt="user profile" />
                    </div>
                <h3>{userData.name}</h3>
                <p>{userData.bio}</p>
            </div>
            <div className="followersCard">
                    <button>Followers | {userData.followers}</button>
                    <button>Following | {userData.following}</button>
                    <button>Location | {userData.location ? `${userData.location}` : "No Location"} </button>
                </div>
            </div>
        </>
    )
}

