import { useEffect, useState } from "react";
import "./RepositoryCard.scss";
import { FaStar } from "react-icons/fa";

export default function RepositoryCard({ searchValue }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchRepoInfo = async () => {
            try {
                const results = await fetch(`https://api.github.com/users/${searchValue}/repos`);
                const data = await results.json();
                console.log(data);
                setData(data);
            } catch (error) {
                console.log(error)
            }
        };

        fetchRepoInfo();

    }, [searchValue]);

    const repoDetail = data.length !== 0 ? (
        data.slice(0, 4).map((item) => (
            <div className="each-repo" key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                    <FaStar id="star"/>
                    <p>{item.stargazers_count}</p>
                    <p>{item.language}</p>
                <p>Last update: {item.updated_at}</p>
                </div>
        ))) : "No Repos found!"

    return (
        <div className="repos">
            {repoDetail}
        </div>
    )
};

/*
        {data.map((item) => (
        <li key={item.id} >{item.name}</li>
       ))}
        */

/* const repoDetail = data.length  !==0 ? (
     data.slice(0, 4).map ((item) => ( 
         <>
     <div className="each-repo" key = {item.id}> 
             <h3>{item.name}</h3>
             <p>{item.description }</p>
             <ul>
                 <li>{item.forks_count }</li>
                 <li>{item.stargazers_count }</li>
                 <li>updated days ago</li>
             </ul>
         </div>
         </>
 ))) : "No Repos found!";

  <div>
    {repoDetail}
    </div>
 */