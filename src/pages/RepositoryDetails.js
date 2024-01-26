import EachRepo from "../components/each_repocard/each_repo";
import Nav from "../components/navigation/nav";
import Profile from "../components/profile/Profile";
import "./../components/scss/pages.scss"

export default function RepositoriesDetails() {


    return (
        <>
            <Nav />
            <Profile />
            <EachRepo />
        </>
    )
}