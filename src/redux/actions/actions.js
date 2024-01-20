// Actions that will be taken in the application

export const setUserData = (userData) => ({
    type: "SET_USER_DATA",
    payload: userData
});

export const clearData = () => ({
    type: "CLEAR_DATA"
});

export const setRepositoriesData = (repositoriesData) => ({
    type: "SET_REPOSITORIES_DATA",
    payload: repositoriesData
});

/*
export const setEachRepoDetail = () => ({
    type: "SET_EACH_REPO_DETAIL",
    payload: repositoryData
})
*/