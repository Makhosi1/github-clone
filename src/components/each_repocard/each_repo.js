import { useDispatch, useSelector } from "react-redux";
import "./each_repo.scss";
import { clearData, setEachRepoDetail } from "../../redux/actions/actions";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EachRepo() {
    const [repoName, setRepoName] = useState("");
    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();
    const eachRepoData = useSelector(state => state.eachRepoData);
    const {repoId} = useParams();
    console.log(repoId);


    useEffect(() => {
        const getRepositoryDetails = async () => {
            const results = await fetch(
                `https://api.github.com/repos/${userData.login}/${repoId}`
            ).then((response) => response.json());
            console.log(results);

            if (!results.error) {
                dispatch(setEachRepoDetail(results));
            } else {
                dispatch(clearData);
            }
        };
        getRepositoryDetails();
    }, [dispatch, userData.login, repoId])

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            // Fetch user data using the API  endpoint
            const eachRepoDataResponse = await fetch(`https://api.github.com/repos/${userData.login}/${repoName}`);
            const eachRepoData = await eachRepoDataResponse.json();
            // save eachRepoData to the redux store
            dispatch(setEachRepoDetail(eachRepoData));
        } catch (error) {
            console.error(error);
            // if error occurs clear the error from the store 
            dispatch(clearData);
        }
    }

    return (
        <>
            <div className="input-wrapper">
                <form onSubmit={handleSearch}>
                    <FaSearch id="search-icon" />
                    <input
                        type="search"
                        value={repoName}
                        onChange={e => setRepoName(e.target.value)}
                        placeholder="search repositories"
                    />
                </form>
            </div>
            <div>
                <h3>{eachRepoData.name}</h3>
                <p>{eachRepoData.description}</p>
                <p>{eachRepoData.language}</p>
                <p>{eachRepoData.visibility}</p>
            </div>
        </>
    )
};