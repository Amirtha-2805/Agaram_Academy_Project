import { Link } from "react-router-dom"
import "../styles/adminhome.css"
import { useNavigate } from "react-router-dom";
export default function AdminHome(){
    const navigate = useNavigate();
    const adminLogOut=()=>{
        navigate("/")
    }
    return(
        <>
        <div className="adminbody">
        <center><h3 className="adminhead">Admin Home</h3></center>
        <div className="admin">
        <h4 className="adminhometitle"><b>AdminFeatures</b></h4>
        <ul className="admin-feature">
            <li className="userlist"><Link className="link">UserList</Link></li>
            <li className="allRecipes"><Link className="link">All Recipes</Link></li>
            <li className="addrecipes"><Link className="link">Add Recipes</Link></li>
            <li className="addrecipes"><Link className="link" to={"/"}>Home</Link></li>

        </ul>
        <center>
            <div className="adminlogout">
        <button className="btn btn-danger" onClick={adminLogOut}>Logout</button>
        </div>
        </center>
        </div>
        </div>
        </>

    )
}