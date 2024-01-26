import { Link } from "react-router-dom";
import "./nav.scss"

export default function Nav(){
    return (
        <>
        <button className="navigatorButtons">
            <Link className="navigatorLinks" to="/" > Home</Link>
        </button> 
        <button className="navigatorButtons">
            <Link className="navigatorLinks" to= "/all-repositories" >All Repositories</Link>
        </button>
        </>
    )
}