import SearchForm from "../search/SearchForm";
import "./Header.scss";

export default function Header (){
   
    

    return(
        <div>
            <header>
            <SearchForm/>
            <div className="headertag">
            <img src="github-logo1.png" alt="github logo" />
            <div className="tagDescription">
            <h4>GitHub</h4>
            <p>How people build software</p>
            </div>
            </div>
            </header>
        </div>
    )
}