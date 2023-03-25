import "./signin.css"
import { useNavigate } from "react-router-dom"

function Signin(){
    const navigate=useNavigate()

    return(
       
        <div className="S-main-container">
            <div className="signin-div">
                <h1>Sign in</h1>
                <div className="email">
                <lable className="lable">Email Address</lable>
                <input className="input" type="email" placeholder="Enter Email" ></input>
                </div>
                <div className="password">
                <lable className="lable">Password</lable>
                <input  className="input" type="password" placeholder="Enter a password" ></input>
                </div>
                <div className="button">
                    <button className="submit" onClick={()=>navigate("/search")}>Submit</button>
                </div>
             
                <div className="F-Pass">
                    <div className="F">Forget <span className="p">Password ?</span></div>
                     
                </div>
                <div className="button">
                    If Dont Have acoount* 
                    <button className="submit-R" onClick={()=>navigate("/register")}>Register</button>
                </div>
            </div>

        </div>
     
    )
}

export default Signin