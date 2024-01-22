import { Link } from "react-router-dom"

export default function Nav(){
    return (
        <>
        <button>
            <Link to="/" > Home</Link>
        </button>
        <button>
            <Link to= "/all-repositories" >All Repositories</Link>
        </button>
        </>
    )
}