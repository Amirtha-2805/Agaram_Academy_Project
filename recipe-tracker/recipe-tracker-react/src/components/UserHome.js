import "../styles/userhome.css"
export default function UserHome(){
    return(
        <>
            <center><h3>User Home</h3></center>
        <div className="user">
        <h4 className="heading"><b>UserFeatures</b></h4>
        <ul className="user-feature">
            <li>All Recipes</li>
            <li>Saved Recipes</li>
            
        </ul>
        <center>
        <button className="btn btn-danger">Logout</button>
        </center>
        </div>

        </>
    )
}