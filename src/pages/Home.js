import Header from "../components/header/Header";
import Profile from "../components/profile/Profile";
import RepositoryCard from "../components/repositories/RepositoryCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./../components/scss/pages.scss"



export default function Home() {

  const listOfRepos = useSelector( state => state.repositoriesData);
    const repoDetail = listOfRepos.length !== 0 ? (
        listOfRepos.slice(0, 4).map((item) => (
            <RepositoryCard
                key={item.id}
                item={item}
            />
        ))) : "No Repos found!";

  return (
    <>
      <Header />
      <Profile />
      <div className="repos">
            {repoDetail}
        </div>
      <Link
        className="links"
        to="/all-repositories">View all repositories</Link>
    </>
  )
}

/*
 
  const [searchValue, setSearchValue] = useState("Makhosi1");
  const repoName = 'repos';

   return (
      <>
      <Header setSearchValue = {setSearchValue}/> 
      <Profile searchValue={searchValue}/>
      <RepositoryCard 
      searchValue ={searchValue}
      repoName ={repoName}
      />
        <Link 
        className="links"
        to="/all-repositories">View all repositories</Link>  
      </>
  )
  */
