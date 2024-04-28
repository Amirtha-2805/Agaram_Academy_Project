import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import {uLogin} from "../redux/slices/counter";

export default function Userlogin(){
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const userLoginData=useSelector((state)=>state.userSignupLoginDetails)
    const userLogin=()=>{
        // navigate("/userhome")
        console.log(userLoginData)
    }
    return(
        <>
            <center><h3>UserLogin</h3></center>
            <div className="adminlogin">
                <div>
                    <label>Email</label><input type="email" className="form-control" placeholder="Enter your email" onKeyUp={(e)=>dispatch(uLogin({
                        ...userLoginData.userlogin,
                        email:e.target.value
                    }))}/>
                </div>
                <div>
                    <label>Password</label><input type="password" className="form-control" placeholder="Enter your password" onKeyUp={(e)=>dispatch(uLogin({
                        ...userLoginData.userlogin,
                        password:e.target.value
                    }))}/>
                </div>
                <br/>
                <button className='btn btn-primary' onClick={userLogin}>Login</button>
            </div>

        </>
    )
}