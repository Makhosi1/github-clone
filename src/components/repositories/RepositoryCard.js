import "./RepositoryCard.scss";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function RepositoryCard({item}) {
    return (
        <div className="each-repo">
            <Link className= "repos" to={`/repository/${item.name}`}>{item.name}</Link>
            <p>{item.description}</p>
                <FaStar id="star"/>
                <p>{item.stargazers_count}</p>
                <p>{item.language}</p>
            <p>Last update: {item.updated_at}</p>
        </div>
    )
};
 /*
 import "./RepositoryCard.scss";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function RepositoryCard() {
    const listOfRepos = useSelector( state => state.repositoriesData);

    const repoDetail = listOfRepos.length !== 0 ? (
        listOfRepos.slice(0, 4).map((item) => (
            <div className="each-repo" key={item.id}>
                <Link className= "repos" 
                to = "/repository/:repoId" >{item.name}</Link>
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

*/