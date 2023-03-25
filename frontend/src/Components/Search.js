import "./Addnote.css"
import Nav from "./Navbar";
function Search() {
    return (
        <>
        <Nav/>
      <div className="main-div">
       <input className="input-search" type="Search" placeholder="     Search"></input>

      </div>
      </>
    );
  }
  
  export default Search;