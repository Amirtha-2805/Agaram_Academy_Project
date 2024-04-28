import "../styles/adminhome.css"
export default function AdminHome(){
    return(
        <>
        <center><h3>Admin Home</h3></center>
        <div className="admin">
        <h4 className="heading"><b>AdminFeatures</b></h4>
        <ul className="admin-feature">
            <li>UserList</li>
            <li>All Recipes</li>
            <li>Add Recipes</li>
        </ul>
        <center>
        <button className="btn btn-danger">Logout</button>
        </center>
        </div>
        </>

    )
}