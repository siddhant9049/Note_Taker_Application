import "./Addnote.css"
import Nav from "./Navbar";
function Export() {
    return (
        <>
        <Nav/>
      <div className="main-div">
       <div className="Export1" ></div>
       <div className="Export2" ></div>
       <div className="button-container">
       <button className="button-delete">Delete</button>
       <button  className="button-update">Update</button>
       </div>
      </div>
      </>
    );
  }
  
  export default Export;