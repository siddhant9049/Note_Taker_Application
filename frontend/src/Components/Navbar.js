import "./Addnote.css"
import { useNavigate } from "react-router-dom"
function Nav() {
    const navigate=useNavigate()
    return (
      <div className="Nav-main">
        <nav className="nav-header">
            <div id="ok" onClick={()=>navigate("/")} >Home</div>
            <div id="ok" onClick={()=>navigate("/AddNote")}>+ AddNote</div>
            <div id="ok">DeleteAll</div>
            <div id="ok" onClick={()=>navigate("/export")}>Export</div>

        </nav>
      </div>
    );
  }
  
  export default Nav;