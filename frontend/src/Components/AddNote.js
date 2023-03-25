import React, { useEffect, useState } from "react"
import axios from "react"
import "./Addnote.css"
import Nav from "./Navbar"
function Addnote() {
const [title,setTitle]=useState("")
const [content,setContent]=useState("")

function handleSubmit (){
    // preventDefault()

    // setTitle(event)
    const newNote={
        title:title,
        content:content
    }
 
        axios.post('/v1/notes',newNote)
    .then((response)=>{
            console.log(response.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    setTitle(" ")
    setContent(" ")
}
    return (
        <>
        <Nav/>
        <form className="main-div" onSubmit={handleSubmit}>
            
            <lable className="lable" htmlFor="title"> 
                Title
            </lable>
            <input type="text" className="title-input" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>

            <lable className="lable" htmlFor="content">
                Description </lable>
            <textarea className="text-area" name="content" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>

            <button className="Form-button" type="submit">AddNote</button>
       {/* {title}
       {content} */}
        </form>
        </>
    )
}
export default Addnote