import Profile from "../components/profile/Profile";
import RepositoryCard from "../components/repositories/RepositoryCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AllRepositories() {

    const listOfRepos = useSelector( state => state.repositoriesData);
    const repoDetail = listOfRepos.length !== 0 ? (
        listOfRepos.map((item) => (
            <RepositoryCard
                key={item.id}
                item={item}
            />
        ))) : "No Repos found!";
    return (
        <>
        <button>
            <Link to="/" > Home</Link>
        </button>
        <Profile/>
        <h2>List Of Repositories</h2>
        <div style = {{ display:"grid"}}>
        <div className="repos">
            {repoDetail}
        </div>
        </div>
        </>
    )
}