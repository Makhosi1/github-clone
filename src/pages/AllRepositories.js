// import Header from "../components/header/Header";
import Profile from "../components/profile/Profile";
import RepositoryCard from "../components/repositories/RepositoryCard";

export default function AllRepositories() {
    return (
        <>
        <Profile/>
        <h2>List Of Repositories</h2>
        <div style = {{ flexDirection: "column"}}>
        <RepositoryCard/>
        </div>
        </>
    )
}