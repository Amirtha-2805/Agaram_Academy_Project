import NavBar from "./Menu"
import "../styles/signup.css"
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { signup } from "../redux/slices/counter";

export default function SignUp(){
    const signupdata=useSelector((state)=>state.userSignupLoginDetails)
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const register=()=>{
        // navigate("/")
        console.log(signupdata)
    }
    return(
        <>
            <NavBar/>
       <center><h3>SignUp</h3></center>
            <div className="input">
                <div>
                    <label>Name</label><input type="text" className="form-control" placeholder="Enter your name" onKeyUp={(e)=>dispatch(signup({
                        ...signupdata.usersignup,
                        name:e.target.value
                    }))}/>
                </div>
                <div>
                    <label>Email</label><input type="email" className="form-control" placeholder="Enter your email"  onKeyUp={(e)=>dispatch(signup({
                        ...signupdata.usersignup,
                        email:e.target.value
                    }))}/>
                </div>
                <div>
                    <label>Age</label><input type="number" className="form-control" placeholder="Enter your age"  onKeyUp={(e)=>dispatch(signup({
                        ...signupdata.usersignup,
                        age:e.target.value
                    }))}/>
                </div>
                <div>
                    <label>Password</label><input type="password" className="form-control" placeholder="Enter your password"  onKeyUp={(e)=>dispatch(signup({
                        ...signupdata.usersignup,
                        password:e.target.value
                    }))}/>
                </div>
                <div>
                    <label>Gender</label><input type="text" className="form-control" placeholder="Enter your gender"  onKeyUp={(e)=>dispatch(signup({
                        ...signupdata.usersignup,
                        gender:e.target.value
                    }))}/>
                </div>
                <div>
                    <label>Phone</label><input type="text" className="form-control" placeholder="Enter your contact number"  onKeyUp={(e)=>dispatch(signup({
                        ...signupdata.usersignup,
                        phone:e.target.value
                    }))}/>
                </div>
                <br/>
                <button className="btn btn-success" onClick={register}>Signup</button>
            </div>
        </>

    )
}