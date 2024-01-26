import Profile from "../components/profile/Profile";
import RepositoryCard from "../components/repositories/RepositoryCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./../components/scss/pages.scss"

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
        <button className="navButtons">
            <Link className="navLinks" to="/" > Home</Link>
        </button>
        <Profile/>
        <h2 style= {{textAlign:"center"}}>List Of Repositories</h2>
        <div className="repos" style = {{ flexDirection: "column",  marginLeft: "250px", width:"100%"}} >
            {repoDetail}
        </div>
        </>
    )
}
