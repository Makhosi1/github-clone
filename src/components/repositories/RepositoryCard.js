import "./RepositoryCard.scss";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";


export default function RepositoryCard({item}) {
    // change the formatt of the date from the API to a more user friendly one. 
    let formattedDate = moment(item.updated_at).format("DD.MM.YYYY HH:mm");

    return (
        <div className="each-repo">
            <Link className= "repoName" to={`/repository/${item.name}`}>{item.name}</Link>
            <h5>{item.description}</h5>
                <FaStar id="star"/>
                <p>{item.stargazers_count}</p>
                <p>{item.language}</p>
            <p>Last update: {formattedDate}</p>
        </div>
    )
};
 