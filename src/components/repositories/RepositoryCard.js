import { useEffect, useState } from "react";
import "./RepositoryCard.scss";

export default function RepositoryCard({ searchValue, repoName }) {
    const [repoInfo, setRepoInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchRepoInfo = async () => {
        const results = await fetch(`https://api.github.com/users/${searchValue}/${repoName}`)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error)
            })
            

        /*if (!results.error) {
            console.log(`User not found`)
        }
        */
    };

    useEffect(() => {
        fetchRepoInfo();
    }
    )

    return (
        <div className="repoinfo">
            <div>
                <h3>Repo Name{ }</h3>
                <p>repoInfo.description{ }</p>
                <ul>
                    <li>repoInfo.forks_count{ }</li>
                    <li>repoInfo.stargazers_count{ }</li>
                    <li>updated days ago</li>
                </ul>
            </div>
            <div>
                <h3>Repo Name{ }</h3>
                <p>repoInfo.description{ }</p>
                <ul>
                    <li>repoInfo.forks_count{ }</li>
                    <li>repoInfo.stargazers_count{ }</li>
                    <li>updated days ago</li>
                </ul>
            </div>
            <div>
                <h3>Repo Name{ }</h3>
                <p>repoInfo.description{ }</p>
                <ul>
                    <li>repoInfo.forks_count{ }</li>
                    <li>repoInfo.stargazers_count{ }</li>
                    <li>updated days ago</li>
                </ul>
            </div>
            <div>
                <h3>Repo Name{ }</h3>
                <p>repoInfo.description{ }</p>
                <ul>
                    <li>repoInfo.forks_count{ }</li>
                    <li>repoInfo.stargazers_count{ }</li>
                    <li>updated days ago</li>
                </ul>
            </div>
        </div>
    )
}

/*const results = await fetch(`https://api.github.com/users/makhosi1`)
        .then((response) => response.json()); 

         if (!results.error){
            console.log (`User not found`)
         }
    };

    useEffect (() => {
        user();
    }
    )

useEffect(() => {
        const fetchRepoInfo = async () => {
            try {
                const response = (`https://api.github.com/users/${searchValue}/${repoName}`);
                const data = await response.json();
                setRepoInfo(data);
            } catch (error) {
                console.error('Error fetching repository information:', error)
            } finally{
                setLoading(false);
            }
        };
        fetchRepoInfo();
    }, [searchValue,repoName]);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (!repoInfo) {
        return <p>Error fetching repository information</p>
    }


    div>
            <h3>{repoInfo.full_name}</h3>
            <p>{repoInfo.description}</p>
            <ul>
                <li>{repoInfo.forks_count}</li>
                <li>{repoInfo.stargazers_count}</li>
                <li>updated days ago</li>
            </ul>

        </div>
    */