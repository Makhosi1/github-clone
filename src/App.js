import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AllRepositories from "./pages/AllRepositories";
import RepositoriesDetails from "./pages/RepositoryDetails";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/all-repositories",
    element: <AllRepositories />
  },
  {
    path:"/repository/:repoId",
    element: <RepositoriesDetails />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
