import { useDispatch } from "react-redux";
import { useState } from "react";
import "./SearchForm.scss";
import { FaSearch } from "react-icons/fa";
import { clearData, setRepositoriesData, setUserData } from "../../redux/actions/actions";

export default function SearchForm() {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();


    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            // Fetch user data using the API  endpoint
            const userDataResponse = await fetch(`https://api.github.com/users/${searchValue}`);
            const userData = await userDataResponse.json();
            // save userData to the redux store 
            dispatch(setUserData(userData));
        } catch (error) {
            console.error(error);
            // if error occurs clear the error from the store 
            dispatch(clearData);
        }

        try {
            // Fetch the repository data 
            const repositoriesDataResponse = await fetch(`https://api.github.com/users/${searchValue}/repos`);
            const repositoriesData = await repositoriesDataResponse.json();

            // save repositoriesData to the redux store 
            dispatch(setRepositoriesData(repositoriesData));
        } catch(error) {
            console.error(error);
            dispatch(clearData);
        }

       
    }

    return (
        <div className="input-wrapper">
            <form onSubmit={handleSearch}>
                <FaSearch id="search-icon" />
                <input
                    type="search"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    placeholder="username"
                />
            </form>
        </div>
    )
};


/*
 const [searchValue,setSearchValue] = useState("");

    

    const user = async () => {
        const results = await fetch(`https://api.github.com/users/makhosi1`)
        .then((response) => response.json()); 

         if (!results.error){
            console.log (`User not found`)
         }
    };

    useEffect (() => {
        user();
    }
    )

    */