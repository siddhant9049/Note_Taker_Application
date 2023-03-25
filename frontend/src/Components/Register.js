import "./Register.css"
import { useNavigate } from "react-router-dom"
function Register(){
    const navigate=useNavigate()

    return(
        <>
        <div className="main-container">
            <div className="register-div">
                <h1> -| Sign Up </h1>
                <div className="email">
                <lable className="lable">Email Address</lable>
                <input className="input" type="email" placeholder="Enter Email" ></input>
                </div>
                <div className="password">
                <lable className="lable">Password</lable>
                <input  className="input" type="password" placeholder="Enter a password" ></input>
                </div>
                <div className="C-password">
                <lable className="lable">Confirm Password</lable>
                <input  className="input" type="password" placeholder="Enter a password" ></input>
                </div>
                <div className="checkbox">
                    <input type="checkbox"/>agree with TERMS AND CONDITIONS
                    
                </div>
                <div className="button">
                    <button className="submit" onClick={()=>navigate("/")}>Submit</button>
                </div>
            
            </div>

        </div>
        </>
    )
}

export default Register