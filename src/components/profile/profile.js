import { useSelector } from "react-redux";
import "./Profile.scss";

export default function Profile() {
    const userData = useSelector( state => state.userData);
    
    return (
        <>
            <div className="profile-container">
                <div className="profile-image" >
                    <img src= {userData.avatar_url ? `${userData.avatar_url}` : "github-logo1.png"} alt="user profile" />
                </div>
                <div className="follow-div">
                    <button>Followers | {userData.followers}</button>

                </div>
                <div className="following-div">
                    <button>Following | {userData.following}</button>
                </div>
                <div className="loc-div">
                    <button>Location | {userData.location ? `${userData.location}` : "No Location"} </button>
                </div>
            </div>
            <div className="slogan">
                <h3>{userData.name}</h3>
                <p>{userData.login}</p>
            </div>

        </>
    )
}



/*

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
*/