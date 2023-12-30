import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Profile from "../components/profile/Profile";

export default function Home() {
    const [userId, setUserId] = useState('')
    const [followersCount, setFollowersCount] = useState(0);
    const [followingCount, setFollowingCount] = useState(0);

    useEffect(() => {
       fetch(`https://api.github.com/users/${userId}/followers`).then((res) => {
        return res.json();
       })
       .then((data) => {
        setFollowersCount(data.followersCount);
        setUserId();
       })
    }

    )
   
    return (
        <>
        <Header /> 
        <Profile
        followersCount={followersCount}
        followingCount={followingCount}
        />
            
        </>
    )
}

  
 