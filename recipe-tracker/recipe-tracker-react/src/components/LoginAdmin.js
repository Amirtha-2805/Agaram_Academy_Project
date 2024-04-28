import '../styles/adminlogin.css'
import { useNavigate } from "react-router-dom";

export default function LoginAdmin(){
    const navigate = useNavigate();

    const adminLogin=()=>{
       navigate("/adminhome")   
     }
    return(

        <>
            <center><h3>AdminLogin</h3></center>
            <div className="adminlogin">
                <div>
                    <label>Email</label><input type="email" className="form-control" placeholder="Enter your email"/>
                </div>
                <div>
                    <label>Password</label><input type="password" className="form-control" placeholder="Enter your password"/>
                </div>
                <br/>
                <button className='btn btn-primary' onClick={adminLogin}>Login</button>
            </div>
        </>
    )
}